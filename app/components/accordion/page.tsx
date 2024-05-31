import PageClient from "./page.client";

export const metadata = {
  title: 'Accordion - Landing Page UI | React Component Library',
  description: 'Welcome to the Landing Page UI - React Component Library.',
  keywords: ['landing page ui', 'ui', 'ui components', 'ui react components', 'landing page ui react components', 'react component library', 'landing page ui react component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
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
};

export default function Page() {
  
  return (
    <PageClient />
  );
}