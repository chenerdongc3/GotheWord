"use client";

import {
  Button,
  Card,
  Cursor,
  Footer,
  Form,
  FormItem,
  Input,
  Tag,
  Title,
} from "@gotheword/pencil-pup-ui";
import type { Session } from "@supabase/supabase-js";
import {
  Component,
  lazy,
  Suspense,
  useEffect,
  useState,
  type ErrorInfo,
  type ReactNode,
} from "react";
import {
  captureAnalyticsEvent,
  captureSanitizedException,
  identifyAnalyticsUser,
  normalizeAnalyticsError,
  resetAnalyticsUser,
} from "./analytics";
import {
  isSupabaseConfigured,
  supabase,
} from "./supabase";

type AuthMode =
  | "login"
  | "register"
  | "verify_signup"
  | "recover"
  | "set-password";

type AuthValues = {
  email: string;
  password: string;
  token: string;
};

const RESEND_COOLDOWN_SECONDS = 60;

function authErrorMessage(error: unknown, flow: AuthMode) {
  const code = normalizeAnalyticsError(error);
  if (code === "rate_limited") return "请求过于频繁，请稍后再试。";
  if (code === "network_error") return "网络连接失败，请检查网络后重试。";
  if (code === "invalid_credentials") return "邮箱或密码不正确；如尚未验证，请使用“重发验证邮件”。";
  if (code === "account_exists") return "无法完成注册，请登录或尝试找回密码。";
  if (code === "otp_expired") return "验证码已过期，请重新发送验证码。";
  if (code === "otp_invalid") return "验证码无效或已使用，请检查后重试。";
  if (flow === "recover") return "暂时无法发送邮件，请稍后再试。";
  return "操作失败，请稍后重试。";
}

const loadAuthenticatedApp = () => import("./GotheWordApp");
const LazyAuthenticatedApp = lazy(loadAuthenticatedApp);

function AuthScreen() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = window.setInterval(() => {
      setCooldown((current) => Math.max(0, current - 1));
    }, 1_000);
    return () => window.clearInterval(timer);
  }, [cooldown]);

  const changeMode = (next: AuthMode) => {
    setMode(next);
    setError("");
    setStatus("");
  };

  const reportFailure = (authError: unknown, flow: AuthMode, stage: "request" | "verify" | "update") => {
    const errorCode = normalizeAnalyticsError(authError);
    captureAnalyticsEvent("authentication_failed", {
      auth_flow: flow === "register" ? "sign_up" : flow === "set-password" ? "set_password" : flow,
      failure_stage: stage,
      error_code: errorCode,
    });
    captureSanitizedException("authentication", errorCode, {
      auth_flow: flow,
      failure_stage: stage,
    });
    setError(authErrorMessage(authError, flow));
  };

  const submit = async (values: Partial<AuthValues>) => {
    if (!supabase) return;
    setLoading(true);
    setError("");
    setStatus("");
    try {
      if (mode === "login") {
        const normalizedEmail = values.email?.trim().toLowerCase() ?? "";
        const { data, error: authError } = await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password: values.password ?? "",
        });
        if (authError) {
          if (authError.message.toLowerCase().includes("email not confirmed")) {
            setEmail(normalizedEmail);
            changeMode("verify_signup");
            setStatus("账号尚未验证，可输入邮件中的验证码或重新发送。");
            return;
          }
          throw authError;
        }
        if (data.user) identifyAnalyticsUser(data.user.id);
        captureAnalyticsEvent("login_completed", { auth_method: "email_password" });
        return;
      }

      if (mode === "register") {
        const normalizedEmail = values.email?.trim().toLowerCase() ?? "";
        const { data, error: authError } = await supabase.auth.signUp({
          email: normalizedEmail,
          password: values.password ?? "",
        });
        if (authError) throw authError;
        if (data.session) await supabase.auth.signOut();
        setEmail(normalizedEmail);
        setCooldown(RESEND_COOLDOWN_SECONDS);
        changeMode("verify_signup");
        setStatus("验证码已发送。验证成功前不会进入学习应用。");
        captureAnalyticsEvent("auth_flow_completed", { auth_flow: "sign_up_requested" });
        return;
      }

      if (mode === "verify_signup") {
        const { data, error: authError } = await supabase.auth.verifyOtp({
          email,
          token: values.token?.trim() ?? "",
          type: "email",
        });
        if (authError) throw authError;
        if (!data.session || !data.user) throw new Error("Invalid verification state");
        identifyAnalyticsUser(data.user.id);
        captureAnalyticsEvent("auth_flow_completed", { auth_flow: "signup_verified" });
        return;
      }

      if (mode === "recover") {
        const normalizedEmail = values.email?.trim().toLowerCase() ?? "";
        const { error: authError } = await supabase.auth.resetPasswordForEmail(normalizedEmail);
        if (authError && normalizeAnalyticsError(authError) === "rate_limited") throw authError;
        setEmail(normalizedEmail);
        changeMode("set-password");
        setStatus("如果该邮箱已注册，验证码邮件会很快送达。");
        captureAnalyticsEvent("auth_flow_completed", { auth_flow: "recovery_requested" });
        return;
      }

      if (mode === "set-password") {
        const token = values.token?.trim();
        const password = values.password;
        if (token) {
          const { error: verifyError } = await supabase.auth.verifyOtp({
            email,
            token,
            type: "recovery",
          });
          if (verifyError) throw verifyError;
          captureAnalyticsEvent("auth_flow_completed", { auth_flow: "recovery_verified" });
        }
        const { error: updateError } = await supabase.auth.updateUser({ password });
        if (updateError) throw updateError;
        captureAnalyticsEvent("auth_flow_completed", { auth_flow: "password_updated" });
        setStatus("密码已更新，正在进入应用。");
      }
    } catch (authError) {
      const stage = mode === "set-password" ? "update" : mode === "verify_signup" ? "verify" : "request";
      reportFailure(authError, mode, stage);
    } finally {
      setLoading(false);
    }
  };

  const resendSignup = async () => {
    if (!supabase || cooldown > 0) return;
    setLoading(true);
    setError("");
    try {
      const { error: resendError } = await supabase.auth.resend({ type: "signup", email });
      if (resendError) throw resendError;
      setCooldown(RESEND_COOLDOWN_SECONDS);
      setStatus("新的验证码已发送，请查看邮箱。");
      captureAnalyticsEvent("auth_flow_completed", { auth_flow: "signup_resent" });
    } catch (resendError) {
      reportFailure(resendError, "verify_signup", "request");
      if (normalizeAnalyticsError(resendError) === "rate_limited") setCooldown(RESEND_COOLDOWN_SECONDS);
    } finally {
      setLoading(false);
    }
  };

  const title = mode === "login" ? "欢迎回来" : mode === "register" ? "创建账号" : mode === "verify_signup" ? "验证邮箱" : mode === "recover" ? "找回密码" : "设置新密码";
  const description = mode === "login" ? "输入真实邮箱和密码，继续今天的学习。" : mode === "register" ? "注册后请使用邮件中的 6 位验证码完成验证。" : mode === "verify_signup" ? `输入发送至 ${email} 的 6 位验证码。` : mode === "recover" ? "我们会发送验证码；无论邮箱是否存在，结果提示都相同。" : "输入恢复验证码和新密码。";

  return (
    <Cursor>
      <main className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[1060px] min-w-0 items-center gap-8 px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-sm sm:px-5 sm:py-12 sm:text-base md:grid-cols-[1.08fr_0.92fr] md:gap-10">
        <section className="min-w-0" aria-labelledby="auth-title">
          <Tag color="app-teal" variant="outlined">德语 · A1 起步</Tag>
          <h1
            id="auth-title"
            className="mt-5 max-w-2xl text-[1.875rem] leading-[1.08] font-black tracking-normal [overflow-wrap:anywhere] sm:text-[clamp(2.25rem,10vw,5rem)]"
          >
            记住单词，也记住你的每一步。
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#8f7b63] sm:text-lg">
            使用邮箱验证保护账号，并在需要时安全地重设密码。
          </p>
        </section>
        <Card color="default" className="grid min-w-0 gap-5">
          <div className="grid min-w-0 gap-4">
            <Title size="middle" color="app-yellow">{title}</Title>
            <p className="m-0 leading-7 text-[#8f7b63] [overflow-wrap:anywhere]">{description}</p>
          </div>
          <Form layout="vertical" size="large" disabled={loading} onFinish={(values) => void submit(values as Partial<AuthValues>)}>
            {(mode === "login" || mode === "register" || mode === "recover") && (
              <FormItem name="email" label="邮箱" rules={[{ required: true, whitespace: true, message: "请输入邮箱" }]}>
                <Input type="email" autoComplete="email" placeholder="name@example.com" allowClear shadow />
              </FormItem>
            )}
            {(mode === "verify_signup" || mode === "set-password") && (
              <FormItem name="token" label="6 位验证码" rules={[{ required: true, message: "请输入验证码" }]}>
                <Input inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} placeholder="000000" shadow />
              </FormItem>
            )}
            {(mode === "login" || mode === "register" || mode === "set-password") && (
              <FormItem name="password" label={mode === "set-password" ? "新密码" : "密码"} rules={[{ required: true, message: "请输入密码" }]}>
                <Input type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} placeholder="请输入密码" shadow />
              </FormItem>
            )}
            {error && <p className="mb-4 text-sm leading-6 font-bold text-[#b44747]" role="alert">{error}</p>}
            {status && <p className="mb-4 text-sm leading-6 font-bold text-[#39756f]" role="status">{status}</p>}
            <Button htmlType="submit" type="primary" size="large" block loading={loading}>
              {mode === "login" ? "登录" : mode === "register" ? "注册并发送验证码" : mode === "verify_signup" ? "验证并进入" : mode === "recover" ? "发送找回验证码" : "更新密码"}
            </Button>
          </Form>
          {mode === "verify_signup" && <Button type="default" block disabled={loading || cooldown > 0} onClick={() => void resendSignup()}>{cooldown > 0 ? `${cooldown} 秒后可重发` : "重发验证邮件"}</Button>}
          {mode === "login" ? (
            <><Button type="text" block onClick={() => changeMode("register")}>第一次来？使用邮箱注册</Button><Button type="text" block onClick={() => changeMode("recover")}>忘记密码</Button></>
          ) : <Button type="text" block onClick={() => changeMode("login")}>返回登录</Button>}
        </Card>
      </main>
      <Footer type="sea" />
    </Cursor>
  );
}
function ConfigurationScreen() {
  return (
    <Cursor>
      <main className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[720px] min-w-0 place-items-center px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-5 sm:py-12">
        <Card color="default" className="grid min-w-0 gap-4">
          <Title size="middle" color="app-yellow">配置 Supabase</Title>
          <p className="m-0 leading-7 text-[#8f7b63] [overflow-wrap:anywhere]">
            还差一步：请配置{" "}
            <code>NEXT_PUBLIC_SUPABASE_URL</code> 和{" "}
            <code>NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY</code> 后重新启动应用。
          </p>
        </Card>
      </main>
      <Footer type="sea" />
    </Cursor>
  );
}

function AuthenticatedAppLoading() {
  return (
    <Cursor>
      <main className="grid min-h-svh place-items-center px-4 pb-[env(safe-area-inset-bottom)]">
        <Card color="default" className="grid gap-3 text-center">
          <Title size="middle" color="app-yellow">正在准备德语词库</Title>
          <p className="m-0 font-bold text-[#8f7b63]" role="status">
            正在读取学习记录和教学内容…
          </p>
        </Card>
      </main>
      <Footer type="sea" />
    </Cursor>
  );
}

type AuthenticatedAppErrorBoundaryProps = {
  children: ReactNode;
  onRetry: () => void;
};

class AuthenticatedAppErrorBoundary extends Component<
  AuthenticatedAppErrorBoundaryProps,
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    captureSanitizedException(
      "authenticated_app_loading",
      normalizeAnalyticsError(error),
      { component_stack_present: Boolean(info.componentStack) },
    );
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <Cursor>
        <main className="grid min-h-svh place-items-center px-4 pb-[env(safe-area-inset-bottom)]">
          <Card color="app-red" className="grid max-w-[560px] gap-4 text-center">
            <Title size="middle" color="app-yellow">学习内容加载失败</Title>
            <p className="m-0 leading-7">
              请检查网络后重试。你的本地学习记录不会因此被清除。
            </p>
            <Button type="primary" size="large" onClick={this.props.onRetry}>
              重新加载
            </Button>
          </Card>
        </main>
        <Footer type="sea" />
      </Cursor>
    );
  }
}

function AuthenticatedApp({
  userId,
  username,
  onSignOut,
}: {
  userId: string;
  username: string;
  onSignOut: () => void;
}) {
  return (
    <AuthenticatedAppErrorBoundary
      onRetry={() => window.location.reload()}
    >
      <Suspense fallback={<AuthenticatedAppLoading />}>
        <LazyAuthenticatedApp
          userId={userId}
          username={username}
          onSignOut={onSignOut}
        />
      </Suspense>
    </AuthenticatedAppErrorBoundary>
  );
}

export default function GotheWordRoot() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(!isSupabaseConfigured);

  useEffect(() => {
    if (!supabase) return;

    let active = true;
    void supabase.auth.getSession().then(({ data }) => {
      if (active) {
        setSession(data.session);
        if (data.session) {
          identifyAnalyticsUser(data.session.user.id);
          void loadAuthenticatedApp().catch(() => undefined);
        }
        setReady(true);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event, nextSession) => {
      setSession(nextSession);
      if (event === "SIGNED_OUT") resetAnalyticsUser();
      else if (nextSession) identifyAnalyticsUser(nextSession.user.id);
      setReady(true);
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  if (!isSupabaseConfigured) return <ConfigurationScreen />;
  if (!ready) {
    return (
      <main className="grid min-h-svh place-items-center px-4 pb-[env(safe-area-inset-bottom)]">
        <p className="font-bold text-[#8f7b63]" role="status">正在读取账号…</p>
      </main>
    );
  }
  if (!session) return <AuthScreen />;

  const username =
    typeof session.user.user_metadata.username === "string"
      ? session.user.user_metadata.username
      : session.user.email?.split("@")[0] || "学习者";
  const signOut = async () => {
    try {
      await supabase?.auth.signOut();
    } finally {
      resetAnalyticsUser();
    }
  };

  return (
    <AuthenticatedApp
      key={session.user.id}
      userId={session.user.id}
      username={username}
      onSignOut={() => void signOut()}
    />
  );
}
