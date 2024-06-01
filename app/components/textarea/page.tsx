import PageClient from "./page.client";

export const metadata = {
  title: 'Textarea - Landing Page UI | React Component Library',
  description: 'Explore the Textarea component in the Landing Page UI - React Component Library. Easily manage and style multiline text input in your React applications.',
  keywords: ['textarea', 'textarea component', 'multiline input', 'text input', 'form input', 'textarea react components', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'textarea component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Textarea - Landing Page UI | React Component Library',
    description: 'Explore the Textarea component in the Landing Page UI - React Component Library. Easily manage and style multiline text input in your React applications.',
    url: 'https://ui.nafisbd.com/textarea',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/textarea-component-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Textarea - Landing Page UI | React Component Library',
    description: 'Explore the Textarea component in the Landing Page UI - React Component Library. Easily manage and style multiline text input in your React applications.',
    images: ['https://ui.nafisbd.com/textarea-component-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/textarea'],
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