import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} · 项目资源库`,
    template: `%s · ${site.name}`,
  },
  description:
    "一个持续更新的个人项目资源库：产品、数据、AI 与一些实验，记录每个项目为什么做、怎么做的、最后改变了什么。",
  openGraph: {
    title: `${site.name} · 项目资源库`,
    description: "产品、数据、AI 与一些实验的项目存档。",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060608",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <ScrollProgress />
        <Nav />
        {children}
        <Footer />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
