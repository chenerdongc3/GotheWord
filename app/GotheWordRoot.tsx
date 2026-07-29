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
  getAuthCredentials,
  isSupabaseConfigured,
  supabase,
} from "./supabase";

type AuthMode = "login" | "register";

type AuthValues = {
  username: string;
  password: string;
};

const loadAuthenticatedApp = () => import("./GotheWordApp");
const LazyAuthenticatedApp = lazy(loadAuthenticatedApp);

function AuthScreen() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const authenticate = async ({ username, password }: AuthValues) => {
    if (!supabase) return;

    void loadAuthenticatedApp().catch(() => undefined);
    setLoading(true);
    setError("");
    let failureStage: "register" | "fallback_login" | "login" =
      mode === "register" ? "register" : "login";

    try {
      const credentials = await getAuthCredentials(username, password);
      if (mode === "register") {
        failureStage = "register";
        const { error: registerError } = await supabase.functions.invoke("register", {
          body: credentials,
        });
        if (registerError) {
          failureStage = "fallback_login";
          const { data, error: existingUserError } =
            await supabase.auth.signInWithPassword({
              email: credentials.email,
              password: credentials.password,
            });
          if (!existingUserError && data.user) {
            identifyAnalyticsUser(data.user.id);
            captureAnalyticsEvent("login_completed", {
              auth_method: "username_password",
            });
            return;
          }
          throw existingUserError ?? registerError;
        }
      }

      failureStage = "login";
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });
      if (authError) throw authError;
      if (data.user) identifyAnalyticsUser(data.user.id);
      if (mode === "login") {
        captureAnalyticsEvent("login_completed", {
          auth_method: "username_password",
        });
      }
    } catch (authError) {
      const errorCode = normalizeAnalyticsError(authError);
      captureAnalyticsEvent("authentication_failed", {
        auth_flow: mode === "register" ? "sign_up" : "login",
        failure_stage: failureStage,
        error_code: errorCode,
      });
      captureSanitizedException("authentication", errorCode, {
        auth_flow: mode === "register" ? "sign_up" : "login",
        failure_stage: failureStage,
      });
      const message =
        authError instanceof Error ? authError.message : "操作失败，请稍后重试";
      if (message === "Invalid login credentials") {
        setError("用户名或密码不正确");
      } else if (message.includes("User already registered")) {
        setError("这个用户名已经注册，请直接登录");
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

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
            一个用户名、一段密码，就能把学习进度安全地保留下来。
          </p>
        </section>
        <Card color="default" className="grid min-w-0 gap-5">
          <div className="grid min-w-0 gap-4">
            <Title size="middle" color="app-yellow">
              {mode === "login" ? "欢迎回来" : "创建账号"}
            </Title>
            <p className="m-0 leading-7 text-[#8f7b63]">
              {mode === "login"
                ? "输入用户名和密码，继续今天的学习。"
                : "没有邮箱步骤，注册后立即进入应用。"}
            </p>
          </div>
          <Form
            layout="vertical"
            size="large"
            disabled={loading}
            onFinish={(values) => void authenticate(values as AuthValues)}
          >
            <FormItem
              name="username"
              label="用户名"
              rules={[
                { required: true, whitespace: true, message: "请输入用户名" },
              ]}
            >
              <Input
                autoComplete="username"
                placeholder="任意用户名"
                allowClear
                shadow
              />
            </FormItem>
            <FormItem
              name="password"
              label="密码"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input
                type="password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                placeholder="任意长度密码"
                shadow
              />
            </FormItem>
            {error && (
              <p className="mb-4 text-sm leading-6 font-bold text-[#b44747]" role="alert">
                {error}
              </p>
            )}
            <Button htmlType="submit" type="primary" size="large" block loading={loading}>
              {mode === "login" ? "登录" : "注册并进入"}
            </Button>
          </Form>
          <Button
            type="text"
            block
            onClick={() => {
              setMode((current) => (current === "login" ? "register" : "login"));
              setError("");
            }}
          >
            {mode === "login" ? "第一次来？直接注册" : "已经注册？返回登录"}
          </Button>
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
      : "学习者";
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
