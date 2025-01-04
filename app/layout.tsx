import '@/app/ui/global.css';
// import './ui/global.css';

// import {inter} from '@/app/ui/fonts';

import {nunito} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
