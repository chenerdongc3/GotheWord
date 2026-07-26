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
} from "animal-island-ui";
import type { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import GotheWordApp from "./GotheWordApp";
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

function AuthScreen() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const authenticate = async ({ username, password }: AuthValues) => {
    if (!supabase) return;

    setLoading(true);
    setError("");

    try {
      const credentials = await getAuthCredentials(username, password);
      if (mode === "register") {
        const { error: registerError } = await supabase.functions.invoke("register", {
          body: credentials,
        });
        if (registerError) {
          const { error: existingUserError } =
            await supabase.auth.signInWithPassword({
              email: credentials.email,
              password: credentials.password,
            });
          if (!existingUserError) return;
          throw new Error("这个用户名已经注册，请直接登录");
        }
      }

      const { error: authError } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });
      if (authError) throw authError;
    } catch (authError) {
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
      <main className="mx-auto grid min-h-[calc(100vh-80px)] w-[min(1060px,calc(100%-40px))] items-center gap-10 py-12 md:grid-cols-[1.08fr_0.92fr]">
        <section aria-labelledby="auth-title">
          <Tag color="app-teal" variant="outlined">德语 · A1 起步</Tag>
          <h1
            id="auth-title"
            className="mt-5 max-w-2xl text-[clamp(2.5rem,6vw,5rem)] font-black leading-[1.05]"
          >
            记住单词，也记住你的每一步。
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[#8f7b63]">
            一个用户名、一段密码，就能把学习进度安全地保留下来。
          </p>
        </section>
        <Card color="default" className="grid gap-5">
          <div>
            <Title size="large" color="app-yellow">
              {mode === "login" ? "欢迎回来" : "创建学习账号"}
            </Title>
            <p className="mb-0 text-[#8f7b63]">
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
              <p className="mb-4 text-sm font-bold text-[#b44747]" role="alert">
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
      <main className="mx-auto grid min-h-[calc(100vh-80px)] w-[min(720px,calc(100%-40px))] place-items-center py-12">
        <Card color="default" className="grid gap-4">
          <Title size="large" color="app-yellow">还差一步 Supabase 配置</Title>
          <p className="mb-0 text-[#8f7b63]">
            请配置 NEXT_PUBLIC_SUPABASE_URL 和
            NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY 后重新启动应用。
          </p>
        </Card>
      </main>
      <Footer type="sea" />
    </Cursor>
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
        setReady(true);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
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
      <main className="grid min-h-screen place-items-center">
        <p className="font-bold text-[#8f7b63]">正在读取账号…</p>
      </main>
    );
  }
  if (!session) return <AuthScreen />;

  const username =
    typeof session.user.user_metadata.username === "string"
      ? session.user.user_metadata.username
      : "学习者";

  return (
    <>
      <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] items-center justify-end gap-3 pt-4">
        <Tag color="app-teal">{username}</Tag>
        <Button type="text" size="small" onClick={() => void supabase?.auth.signOut()}>
          退出登录
        </Button>
      </div>
      <GotheWordApp userId={session.user.id} />
    </>
  );
}
