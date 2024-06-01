import PageClient from "./page.client";

export const metadata = {
  title: 'Tabs - Landing Page UI | React Component Library',
  description: 'Discover the Tabs component in the Landing Page UI - React Component Library. Easily organize and navigate content with tabbed interfaces.',
  keywords: ['tabs', 'tabs component', 'tabbed interface', 'tab navigation', 'tabs react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'tabs component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Tabs - Landing Page UI | React Component Library',
    description: 'Discover the Tabs component in the Landing Page UI - React Component Library. Easily organize and navigate content with tabbed interfaces.',
    url: 'https://ui.nafisbd.com/tabs',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/tabs-component-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tabs - Landing Page UI | React Component Library',
    description: 'Discover the Tabs component in the Landing Page UI - React Component Library. Easily organize and navigate content with tabbed interfaces.',
    images: ['https://ui.nafisbd.com/tabs-component-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/tabs'],
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