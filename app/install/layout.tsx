import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1f5f9' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata: Metadata = {
  title: 'Install - Landing Page UI | React Component Library',
  description: 'Landing Page UI is a React component library that provides a set of React components for building landing pages.Discover our Landing Page UI Kit, a seamless blend of React and Tailwind CSS components, perfect for effortlessly creating captivating landing pages.',
  keywords: ['install', 'installation', 'how to install', 'how to install landing page ui', 'vite install', 'vite installation', 'vite react application', 'next js', 'next js landing page', 'next js installation', 'landing page ui', 'ui', 'ui components', 'ui react components', 'landing page ui react components', 'react component library', 'landing page ui react component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Install - Landing Page UI | React Component Library',
    description: 'Landing Page UI is a React component library that provides a set of React components for building landing pages.Discover our Landing Page UI Kit, a seamless blend of React and Tailwind CSS components, perfect for effortlessly creating captivating landing pages.',
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
    title: 'Install - Landing Page UI | React Component Library',
    description: 'Landing Page UI is a React component library that provides a set of React components for building landing pages.Discover our Landing Page UI Kit, a seamless blend of React and Tailwind CSS components, perfect for effortlessly creating captivating landing pages.',
    images: ['https://ui.nafisbd.com/hero-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/install'],
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
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* seo meta tag */}
        <meta name="title" content="Install - Landing Page UI | React Component Library" />
        <meta name="description" content="Landing Page UI is a React component library that provides a set of React components for building landing pages.Discover our Landing Page UI Kit, a seamless blend of React and Tailwind CSS components, perfect for effortlessly creating captivating landing pages." />
        <meta name="keywords" content="install, installation, how to install, how to install landing page ui, vite install, vite installation, vite react application, next js, next js landing page, next js installation,landing page ui, ui, ui components, ui react components, landing page ui react components, react component library, landing page ui react component library, ui component library, ui react component library, page ui, react page ui, react components library" />
        {/* <meta name="author" content="Nafis Mahmud Ayon" /> */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Install - Landing Page UI | React Component Library" />
        <meta property="og:description" content="Landing Page UI is a React component library that provides a set of React components for building landing pages.Discover our Landing Page UI Kit, a seamless blend of React and Tailwind CSS components, perfect for effortlessly creating captivating landing pages." />
        <meta property="og:image" content="https://ui.nafisbd.com/hero-img.png" />
        <meta property="og:url" content="https://ui.nafisbd.com/install" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Landing Page UI" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Install - Landing Page UI | React Component Library" />
        <meta name="twitter:description" content="Landing Page UI is a React component library that provides a set of React components for building landing pages.Discover our Landing Page UI Kit, a seamless blend of React and Tailwind CSS components, perfect for effortlessly creating captivating landing pages." />
        <meta name="twitter:image" content="https://ui.nafisbd.com/hero-img.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="font-sans">
        <div className="bg-slate-100 font-sans text-slate-700 dark:text-slate-200  dark:bg-darkBgColor  min-h-screen relative ">
          <div className="flex pt-[62px] flex-nowrap flex-col md:flex-row lg:flex-row relative h-screen overflow-y-scroll">
            <Navbar className="fixed z-30 top-0 left-0 w-full" />
            <div className="w-full lg:w-[80%] flex-1 px-3 pt-4 md:pl-5 md:pr-5 ">
              <Loader />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
