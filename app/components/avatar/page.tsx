import PageClient from "./page.client";

export const metadata = {
  title: 'Avatar - Landing Page UI | React Component Library',
  description: 'Discover the Avatar component in the Landing Page UI - React Component Library. Easily add customizable avatars to your web application.',
  keywords: ['avatar', 'avatar component', 'landing page ui', 'ui', 'ui components', 'ui react components', 'avatar react components', 'react component library', 'avatar component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Avatar - Landing Page UI | React Component Library',
    description: 'Discover the Avatar component in the Landing Page UI - React Component Library. Easily add customizable avatars to your web application.',
    url: 'https://ui.nafisbd.com/avatar',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/avatar-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avatar - Landing Page UI | React Component Library',
    description: 'Discover the Avatar component in the Landing Page UI - React Component Library. Easily add customizable avatars to your web application.',
    images: ['https://ui.nafisbd.com/avatar-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/avatar'],
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