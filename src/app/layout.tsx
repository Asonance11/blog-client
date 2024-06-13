import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const font = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A blog",
  description:
    "A blog for writing ypur thoughts and some other things you wish to write",
};

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
