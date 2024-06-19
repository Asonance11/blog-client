import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "A Blog",
    template: "%s | A Blog",
  },
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
      <body className={cn("scroll-smooth", font.className)}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
