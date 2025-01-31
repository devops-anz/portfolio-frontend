import type { Metadata } from 'next';
import { Inconsolata,  } from 'next/font/google';
import '../../styles/globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';
// import dynamic from "next/dynamic";

// const  ThemeProviders = dynamic(() => import('./theme-providers'), { ssr: false })

// const inter = Inter({ subsets: ["latin"] });

const inconsolata = Inconsolata({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});




export const metadata: Metadata = {
  title: 'ADAM',
  description: 'Access top-tier Web solutions to address your tech challenges with ease.'   
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <meta name='google-site-verification' content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} /> <GoogleAnalytics />
      <body className={`${inconsolata.className}`}>{children}</body>
    </html>
  );
}
