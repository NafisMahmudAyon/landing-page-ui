import PageClient from "./page.client";

export const metadata = {
  title: 'Card - Landing Page UI | React Component Library',
  description: 'Explore the Card component in the Landing Page UI - React Component Library. Build visually appealing card layouts for your web applications with ease.',
  keywords: ['card', 'card component', 'landing page ui', 'ui', 'ui components', 'ui react components', 'card react components', 'react component library', 'card component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Card - Landing Page UI | React Component Library',
    description: 'Explore the Card component in the Landing Page UI - React Component Library. Build visually appealing card layouts for your web applications with ease.',
    url: 'https://ui.nafisbd.com/card',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/card-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Card - Landing Page UI | React Component Library',
    description: 'Explore the Card component in the Landing Page UI - React Component Library. Build visually appealing card layouts for your web applications with ease.',
    images: ['https://ui.nafisbd.com/card-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/card'],
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