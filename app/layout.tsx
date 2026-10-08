import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anna Egorova — Product & Communication Designer",

  description:
    "Portfolio of Anna Egorova, Product and Communication Designer.",

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}