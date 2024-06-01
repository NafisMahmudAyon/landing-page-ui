import PageClient from "./page.client";

export const metadata = {
  title: 'Image - Landing Page UI | React Component Library',
  description: 'Explore the versatile Image component in the Landing Page UI - React Component Library. Enhance your web applications with responsive and optimized images.',
  keywords: ['image component', 'responsive images', 'optimized images', 'image react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'image component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Image - Landing Page UI | React Component Library',
    description: 'Explore the versatile Image component in the Landing Page UI - React Component Library. Enhance your web applications with responsive and optimized images.',
    url: 'https://ui.nafisbd.com/image',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/image-component-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image - Landing Page UI | React Component Library',
    description: 'Explore the versatile Image component in the Landing Page UI - React Component Library. Enhance your web applications with responsive and optimized images.',
    images: ['https://ui.nafisbd.com/image-component-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/image'],
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