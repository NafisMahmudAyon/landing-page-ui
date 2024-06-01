import PageClient from "./page.client";

export const metadata = {
  title: 'Grid - Landing Page UI | React Component Library',
  description: 'Explore the Grid component in the Landing Page UI - React Component Library. Create structured and responsive grid layouts with ease using our flexible Grid component.',
  keywords: ['grid', 'grid component', 'grid layout', 'responsive grid', 'grid react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'grid component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Grid - Landing Page UI | React Component Library',
    description: 'Explore the Grid component in the Landing Page UI - React Component Library. Create structured and responsive grid layouts with ease using our flexible Grid component.',
    url: 'https://ui.nafisbd.com/grid',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/grid-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grid - Landing Page UI | React Component Library',
    description: 'Explore the Grid component in the Landing Page UI - React Component Library. Create structured and responsive grid layouts with ease using our flexible Grid component.',
    images: ['https://ui.nafisbd.com/grid-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/grid'],
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