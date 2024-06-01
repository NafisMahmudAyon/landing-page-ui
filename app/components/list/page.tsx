import PageClient from "./page.client";

export const metadata = {
  title: 'List - Landing Page UI | React Component Library',
  description: 'Explore the List component in the Landing Page UI - React Component Library. Create structured lists with customizable styles and functionality.',
  keywords: ['list', 'list component', 'unordered list', 'ordered list', 'list item', 'list react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'list component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'List - Landing Page UI | React Component Library',
    description: 'Explore the List component in the Landing Page UI - React Component Library. Create structured lists with customizable styles and functionality.',
    url: 'https://ui.nafisbd.com/list',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/list-component-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'List - Landing Page UI | React Component Library',
    description: 'Explore the List component in the Landing Page UI - React Component Library. Create structured lists with customizable styles and functionality.',
    images: ['https://ui.nafisbd.com/list-component-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/list'],
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