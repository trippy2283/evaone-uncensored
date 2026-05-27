import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eva.One — Uncensored',
  description: 'AI Executive Intelligence. No filters. No middleman. Direct.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
