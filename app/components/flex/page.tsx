import PageClient from "./page.client";

export const metadata = {
  title: 'Flex - Landing Page UI | React Component Library',
  description: 'Discover the Flex component in the Landing Page UI - React Component Library. Utilize flexible box layouts to create responsive and dynamic web layouts effortlessly.',
  keywords: ['flex', 'flexbox', 'flex component', 'flex react components', 'responsive layout', 'landing page ui', 'ui', 'ui components', 'ui react components', 'react component library', 'flex component library', 'ui component library', 'ui react component library', 'page ui', 'react page ui', 'react components library'],
  authors: [{ name: 'Nafis Mahmud Ayon', url: 'https://nafisbd.com' }, { url: 'https://github.com/NafisMahmudAyon' }],
  creator: 'Nafis Mahmud Ayon',
  metadataBase: new URL('https://ui.nafisbd.com'),
  icons: {
    apple: "/favicon.png"
  },
  openGraph: {
    title: 'Flex - Landing Page UI | React Component Library',
    description: 'Discover the Flex component in the Landing Page UI - React Component Library. Utilize flexible box layouts to create responsive and dynamic web layouts effortlessly.',
    url: 'https://ui.nafisbd.com/flex',
    siteName: 'Landing Page UI',
    images: [
      {
        url: 'https://ui.nafisbd.com/flex-img.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flex - Landing Page UI | React Component Library',
    description: 'Discover the Flex component in the Landing Page UI - React Component Library. Utilize flexible box layouts to create responsive and dynamic web layouts effortlessly.',
    images: ['https://ui.nafisbd.com/flex-img.png'],
  },
  bookmarks: ['https://ui.nafisbd.com/flex'],
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