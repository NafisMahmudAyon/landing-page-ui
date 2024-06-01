import PageClient from "./page.client";

export const metadata = {
  title: 'Label - Landing Page UI | React Component Library',
  description: 'Discover the Label component in the Landing Page UI - React Component Library. Add descriptive text to your forms and UI elements with customizable labels.',
  keywords: ['label', 'label component', 'form label', 'text label', 'label field', 'label react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'label component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Label - Landing Page UI | React Component Library',
    description: 'Discover the Label component in the Landing Page UI - React Component Library. Add descriptive text to your forms and UI elements with customizable labels.',
    url: 'https://ui.nafisbd.com/label',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/label-component-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Label - Landing Page UI | React Component Library',
    description: 'Discover the Label component in the Landing Page UI - React Component Library. Add descriptive text to your forms and UI elements with customizable labels.',
    images: ['https://ui.nafisbd.com/label-component-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/label'],
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