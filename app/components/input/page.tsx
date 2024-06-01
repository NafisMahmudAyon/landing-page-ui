import PageClient from "./page.client";

export const metadata = {
  title: 'Input - Landing Page UI | React Component Library',
  description: 'Explore the versatile Input component in the Landing Page UI - React Component Library. Enhance forms with customizable input fields for various data types.',
  keywords: ['input', 'input component', 'form input', 'text input', 'input field', 'input react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'input component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Input - Landing Page UI | React Component Library',
    description: 'Explore the versatile Input component in the Landing Page UI - React Component Library. Enhance forms with customizable input fields for various data types.',
    url: 'https://ui.nafisbd.com/input',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/input-component-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Input - Landing Page UI | React Component Library',
    description: 'Explore the versatile Input component in the Landing Page UI - React Component Library. Enhance forms with customizable input fields for various data types.',
    images: ['https://ui.nafisbd.com/input-component-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/input'],
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