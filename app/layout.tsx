import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { LinearGradient } from "expo-linear-gradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <LinearGradient
        colors = {['#ff0000', '#0000ff']}></LinearGradient> */}
        {children}</body>
    </html>
  );
}
