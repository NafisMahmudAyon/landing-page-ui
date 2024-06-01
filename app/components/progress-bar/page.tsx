import PageClient from "./page.client";

export const metadata = {
  title: 'Progress Bar - Landing Page UI | React Component Library',
  description: 'Discover the Progress Bar component in the Landing Page UI - React Component Library. Visualize progress and completion statuses effectively.',
  keywords: ['progress bar', 'progress bar component', 'progress indicator', 'progress react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'progress bar component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Progress Bar - Landing Page UI | React Component Library',
    description: 'Discover the Progress Bar component in the Landing Page UI - React Component Library. Visualize progress and completion statuses effectively.',
    url: 'https://ui.nafisbd.com/progress-bar',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/progress-bar-component-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Progress Bar - Landing Page UI | React Component Library',
    description: 'Discover the Progress Bar component in the Landing Page UI - React Component Library. Visualize progress and completion statuses effectively.',
    images: ['https://ui.nafisbd.com/progress-bar-component-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/progress-bar'],
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