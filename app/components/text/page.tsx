import PageClient from "./page.client";

export const metadata = {
  title: 'Text - Landing Page UI | React Component Library',
  description: 'Explore the Text component in the Landing Page UI - React Component Library. Easily manage and style text content in your React applications.',
  keywords: ['text', 'text component', 'text management', 'text styling', 'typography', 'text react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'text component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Text - Landing Page UI | React Component Library',
    description: 'Explore the Text component in the Landing Page UI - React Component Library. Easily manage and style text content in your React applications.',
    url: 'https://ui.nafisbd.com/text',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/text-component-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text - Landing Page UI | React Component Library',
    description: 'Explore the Text component in the Landing Page UI - React Component Library. Easily manage and style text content in your React applications.',
    images: ['https://ui.nafisbd.com/text-component-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/text'],
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