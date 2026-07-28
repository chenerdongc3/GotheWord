"use client";

import { Button, Card, Form, FormItem, Input, Modal, Title } from "@gotheword/pencil-pup-ui";
import { useState } from "react";
import { beginLegacyMigration, completeLegacyMigration } from "./legacy-account-migration";
import { supabase } from "./supabase";

export function LegacyAccountMigration({ userId, username }: { userId: string; username: string }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState<{ email: string; password: string } | null>(null);

  const fail = (message: string) => { setError(message); setBusy(false); };
  return <>
    <Card color="app-yellow" className="grid gap-4">
      <Title size="small" color="app-yellow">升级测试账号</Title>
      <p className="m-0 leading-7 text-[#8f7b63]">绑定真实邮箱并设置正式密码，同时保留账号 ID 和全部学习记录。</p>
      <Button type="primary" onClick={() => setOpen(true)}>开始安全迁移</Button>
    </Card>
    <Modal open={open} title={pending ? "确认新邮箱" : "升级测试账号"} typewriter={false}
      maskClosable={!busy} onClose={() => { if (!busy) setOpen(false); }} footer={null}>
      {!pending ? <Form layout="vertical" size="large" disabled={busy} onFinish={(raw) => {
        if (!supabase) return;
        const values = raw as Record<string, string>; setBusy(true); setError("");
        void beginLegacyMigration(supabase, { userId, username, currentPassword: values.currentPassword, newEmail: values.email })
          .then(() => { setPending({ email: values.email, password: values.newPassword }); setBusy(false); })
          .catch(() => fail("迁移未开始。请检查当前密码或邮箱是否已使用，然后重试。"));
      }}>
        <FormItem name="email" label="真实邮箱" rules={[{ required: true, type: "email", message: "请输入有效邮箱" }]}><Input type="email" autoComplete="email" shadow /></FormItem>
        <FormItem name="newPassword" label="新密码" rules={[{ required: true, min: 8, message: "新密码至少 8 位" }]}><Input type="password" autoComplete="new-password" shadow /></FormItem>
        <FormItem name="currentPassword" label="当前测试账号密码" rules={[{ required: true, message: "请输入当前密码" }]}><Input type="password" autoComplete="current-password" shadow /></FormItem>
        {error && <p role="alert" className="font-bold text-[#b44747]">{error}</p>}
        <Button htmlType="submit" type="primary" block loading={busy}>发送确认码</Button>
      </Form> : <Form layout="vertical" size="large" disabled={busy} onFinish={(raw) => {
        if (!supabase) return; setBusy(true); setError("");
        void completeLegacyMigration(supabase, { userId, newEmail: pending.email, newPassword: pending.password, otp: (raw as Record<string, string>).otp })
          .then(() => { setPending(null); setOpen(false); setBusy(false); })
          .catch(() => fail("确认码无效或已过期。原登录仍可使用，请重新提交或重试迁移。"));
      }}>
        <p className="mt-0 leading-7 text-[#8f7b63]">确认前原登录与学习数据仍可使用。请输入新邮箱收到的 6 位确认码。</p>
        <FormItem name="otp" label="确认码" rules={[{ required: true, pattern: /^\d{6}$/, message: "请输入 6 位确认码" }]}><Input inputMode="numeric" autoComplete="one-time-code" maxLength={6} shadow /></FormItem>
        {error && <p role="alert" className="font-bold text-[#b44747]">{error}</p>}
        <Button htmlType="submit" type="primary" block loading={busy}>确认并完成迁移</Button>
      </Form>}
    </Modal>
  </>;
}
