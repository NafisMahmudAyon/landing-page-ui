import PageClient from "./page.client";

export const metadata = {
  title: 'Table - Landing Page UI | React Component Library',
  description: 'Explore the Table component in the Landing Page UI - React Component Library. Efficiently display and manage tabular data.',
  keywords: ['table', 'table component', 'data table', 'table react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'table component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Table - Landing Page UI | React Component Library',
    description: 'Explore the Table component in the Landing Page UI - React Component Library. Efficiently display and manage tabular data.',
    url: 'https://ui.nafisbd.com/table',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/table-component-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Table - Landing Page UI | React Component Library',
    description: 'Explore the Table component in the Landing Page UI - React Component Library. Efficiently display and manage tabular data.',
    images: ['https://ui.nafisbd.com/table-component-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/table'],
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