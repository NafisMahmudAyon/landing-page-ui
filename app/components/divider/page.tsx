import PageClient from "./page.client";

export const metadata = {
  title: 'Divider - Landing Page UI | React Component Library',
  description: 'Explore the Divider component in the Landing Page UI - React Component Library. Use dividers to create visual separation between content sections in your web applications.',
  keywords: ['divider', 'divider component', 'landing page ui', 'ui', 'ui components', 'ui react components', 'divider react components', 'react component library', 'divider component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Divider - Landing Page UI | React Component Library',
    description: 'Explore the Divider component in the Landing Page UI - React Component Library. Use dividers to create visual separation between content sections in your web applications.',
    url: 'https://ui.nafisbd.com/divider',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/divider-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divider - Landing Page UI | React Component Library',
    description: 'Explore the Divider component in the Landing Page UI - React Component Library. Use dividers to create visual separation between content sections in your web applications.',
    images: ['https://ui.nafisbd.com/divider-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/divider'],
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