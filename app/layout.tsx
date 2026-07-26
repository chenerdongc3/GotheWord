import type { Metadata } from "next";
import "animal-island-ui/style";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://gotheword-de.chenerdongc3.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GotheWord · 德语记忆花园",
  description: "用短测试与间隔复习，轻松建立你的德语词汇记忆。",
  openGraph: {
    title: "GotheWord · 德语记忆花园",
    description: "每天几分钟，让单词真正留下来。",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "GotheWord 德语记忆花园",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GotheWord · 德语记忆花园",
    description: "每天几分钟，让单词真正留下来。",
    images: [`${siteUrl}/og.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: `${siteUrl}/favicon.svg`, type: "image/svg+xml" }],
  },
};

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
