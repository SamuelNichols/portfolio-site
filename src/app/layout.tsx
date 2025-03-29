import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Software Engineer & Cybersecurity Portfolio',
  description: 'Portfolio showcasing software engineering and cybersecurity expertise',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // html layout
    // we use body className to apply the inter font to the body
    // we use div className to create a flex container with a min height of screen and a flex column
    // we use navbar component to create the navbar found in components/Navbar.tsx
    // we use main className to create a flex item that grows to fill the available space
    // we use footer component to create the footer found in components/Footer.tsx
    // we use children to render the page content which is passed from the page component
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
