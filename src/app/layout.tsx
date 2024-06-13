import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const font = DM_Sans({ subsets: ["latin"] });

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
      <body className={cn("scroll-smooth", font.className)}>{children}</body>
    </html>
  );
}
