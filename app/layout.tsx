import type { Metadata } from "next";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const poppinsRegular = Poppins({ subsets: ["latin"], weight: "400", display: "swap" });

export const metadata: Metadata = {
  title: "Landing Page UI",
  description: "Welcome to the Landing Page UI - React Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
