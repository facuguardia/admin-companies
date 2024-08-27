import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Company Manager Panel",
  description: "Manage your companies efficiently and easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={noto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
