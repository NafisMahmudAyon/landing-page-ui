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
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const preferDarkQuery = "(prefers-color-scheme: dark)";
                const userPref = window.localStorage.getItem("theme");
                const mediaQuery = window.matchMedia(preferDarkQuery);
                const isDarkMode = userPref === "dark" || (!userPref && mediaQuery.matches);
                if (isDarkMode) {
                  document.documentElement.classList.add("dark");
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
