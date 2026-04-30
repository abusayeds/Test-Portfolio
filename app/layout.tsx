import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Your Name | Full-Stack Software Engineer",
  description: "Building scalable web systems with clean interfaces",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a1f] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}