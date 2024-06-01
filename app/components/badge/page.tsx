import PageClient from "./page.client";

export const metadata = {
  title: 'Badge - Landing Page UI | React Component Library',
  description: 'Explore the Badge component in the Landing Page UI - React Component Library. Enhance your web application with customizable badges.',
  keywords: ['badge', 'badge component', 'landing page ui', 'ui', 'ui components', 'ui react components', 'badge react components', 'react component library', 'badge component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Badge - Landing Page UI | React Component Library',
    description: 'Explore the Badge component in the Landing Page UI - React Component Library. Enhance your web application with customizable badges.',
    url: 'https://ui.nafisbd.com/badge',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/badge-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Badge - Landing Page UI | React Component Library',
    description: 'Explore the Badge component in the Landing Page UI - React Component Library. Enhance your web application with customizable badges.',
    images: ['https://ui.nafisbd.com/badge-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/badge'],
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