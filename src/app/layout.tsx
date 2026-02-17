import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "李 正成 | Portfolio",
  description:
    "人の可能性を追求し、人の価値を最大化する。事業設計・営業設計・採用育成・AI活用など、幅広い領域で実務に取り組む李正成のポートフォリオサイト。",
  openGraph: {
    title: "李 正成 | Portfolio",
    description:
      "人の可能性を追求し、人の価値を最大化する。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.variable}>{children}</body>
    </html>
  );
}
