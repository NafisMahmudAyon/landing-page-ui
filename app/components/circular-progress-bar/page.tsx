import PageClient from "./page.client";

export const metadata = {
  title: 'Circular Progress - Landing Page UI | React Component Library',
  description: 'Discover the Circular Progress component in the Landing Page UI - React Component Library. Easily indicate progress with a circular indicator in your web applications.',
  keywords: ['circular progress', 'circular progress bar component', 'circular progress bar', 'landing page ui', 'ui', 'ui components', 'ui react components', 'circular progress react components', 'react component library', 'circular progress component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Circular Progress - Landing Page UI | React Component Library',
    description: 'Discover the Circular Progress component in the Landing Page UI - React Component Library. Easily indicate progress with a circular indicator in your web applications.',
    url: 'https://ui.nafisbd.com/circular-progress',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/circular-progress-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Circular Progress - Landing Page UI | React Component Library',
    description: 'Discover the Circular Progress component in the Landing Page UI - React Component Library. Easily indicate progress with a circular indicator in your web applications.',
    images: ['https://ui.nafisbd.com/circular-progress-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/circular-progress'],
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