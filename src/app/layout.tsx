import type { Metadata } from "next";
import '@fontsource/abril-fatface';
import '@fontsource/poppins';
import "./globals.css";
import "@public/styles/typography.css";

export const metadata: Metadata = {
  title: "Portdia",
  description: "Personal portfolio for Ditra Amadia",
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
