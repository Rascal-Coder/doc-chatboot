import type { Metadata } from "next";
import { Outfit } from 'next/font/google'
import "./globals.css";


export const metadata: Metadata = {
  title: "doc-chatboot",
  description: "langchain openai doc-chatboot rag",
};

const font = Outfit({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
