import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X-FAB AI Sales Intelligence Demo",
  description: "Interactive prototype for semiconductor lead qualification and AI-assisted account management.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
