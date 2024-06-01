import PageClient from "./page.client";

export const metadata = {
  title: 'Icon Button - Landing Page UI | React Component Library',
  description: 'Discover the Icon Button component in the Landing Page UI - React Component Library. Enhance your UI with stylish and interactive icon buttons for various actions.',
  keywords: ['icon button', 'icon button component', 'button with icon', 'icon button react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'icon button component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Icon Button - Landing Page UI | React Component Library',
    description: 'Discover the Icon Button component in the Landing Page UI - React Component Library. Enhance your UI with stylish and interactive icon buttons for various actions.',
    url: 'https://ui.nafisbd.com/icon-button',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/icon-button-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Icon Button - Landing Page UI | React Component Library',
    description: 'Discover the Icon Button component in the Landing Page UI - React Component Library. Enhance your UI with stylish and interactive icon buttons for various actions.',
    images: ['https://ui.nafisbd.com/icon-button-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/icon-button'],
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