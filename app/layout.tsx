import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "festa ponto.",
  description: "uma festa. um show de talentos. 19/09/2026, de 17h até 00h.",
  openGraph: {
    title: "festa ponto.",
    description: "uma festa. um show de talentos. 19/09/2026, de 17h até 00h.",
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
