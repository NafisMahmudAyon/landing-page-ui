import PageClient from "./page.client";

export const metadata = {
  title: 'Block - Landing Page UI | React Component Library',
  description: 'Discover the Block component in the Landing Page UI - React Component Library. Design your web applications with versatile and customizable block elements.',
  keywords: ['block', 'block component', 'landing page ui', 'ui', 'ui components', 'ui react components', 'block react components', 'react component library', 'block component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Block - Landing Page UI | React Component Library',
    description: 'Discover the Block component in the Landing Page UI - React Component Library. Design your web applications with versatile and customizable block elements.',
    url: 'https://ui.nafisbd.com/block',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/block-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Block - Landing Page UI | React Component Library',
    description: 'Discover the Block component in the Landing Page UI - React Component Library. Design your web applications with versatile and customizable block elements.',
    images: ['https://ui.nafisbd.com/block-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/block'],
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