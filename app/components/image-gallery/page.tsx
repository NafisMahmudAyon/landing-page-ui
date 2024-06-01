import PageClient from "./page.client";

export const metadata = {
  title: 'Image Gallery - Landing Page UI | React Component Library',
  description: 'Discover the dynamic Image Gallery component in the Landing Page UI - React Component Library. Display collections of images with style and responsiveness.',
  keywords: ['image gallery', 'gallery component', 'responsive image gallery', 'image collections', 'image gallery react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'image gallery component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Image Gallery - Landing Page UI | React Component Library',
    description: 'Discover the dynamic Image Gallery component in the Landing Page UI - React Component Library. Display collections of images with style and responsiveness.',
    url: 'https://ui.nafisbd.com/image-gallery',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/image-gallery-component-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Gallery - Landing Page UI | React Component Library',
    description: 'Discover the dynamic Image Gallery component in the Landing Page UI - React Component Library. Display collections of images with style and responsiveness.',
    images: ['https://ui.nafisbd.com/image-gallery-component-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/image-gallery'],
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