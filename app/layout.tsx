import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "festa ponto.",
  description: "uma festa. um show de talentos. julho ou agosto.",
  openGraph: {
    title: "festa ponto.",
    description: "uma festa. um show de talentos. julho ou agosto.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
