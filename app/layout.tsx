import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solar Fox Services — Smart Route-Based Solar Panel Cleaning",
  description:
    "We match your solar panel cleaning job to the most efficient nearby service route — saving you up to 20% vs standard scheduling. Licensed, insured, satisfaction guaranteed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
