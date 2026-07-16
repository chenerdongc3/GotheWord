import type { Metadata } from "next";
import { headers } from "next/headers";
import "animal-island-ui/style";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") || host.startsWith("127.0.0.1")
    ? "http"
    : "https";
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "GotheWord · 德语记忆花园",
    description: "用短测试与间隔复习，轻松建立你的德语词汇记忆。",
    openGraph: {
      title: "GotheWord · 德语记忆花园",
      description: "每天几分钟，让单词真正留下来。",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "GotheWord 德语记忆花园" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "GotheWord · 德语记忆花园",
      description: "每天几分钟，让单词真正留下来。",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
