import type { Metadata } from "next";
import type { Viewport } from 'next'
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const poppinsRegular = Poppins({ subsets: ["latin"], weight: "400", display: "swap" });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1f5f9' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata: Metadata = {
  title: 'Landing Page UI - React Component Library',
  description: 'Welcome to the Landing Page UI - React Component Library.',
  keywords: ['landing page ui', 'ui', 'ui components', 'ui react components', 'landing page ui react components', 'react component library', 'landing page ui react component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon'}],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Landing Page UI - React Component Library',
    description: 'Welcome to the Landing Page UI - React Component Library.',
    url: 'https://ui.nafisbd.com',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/hero-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Page UI - React Component Library',
    description: 'Welcome to the Landing Page UI - React Component Library.',
    images: ['https://ui.nafisbd.com/hero-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/'],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'kzd4tEkZbSdyQePsnqGTPD9k-qeM8NDEKQQE3-ArBfA',
  },
}

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
