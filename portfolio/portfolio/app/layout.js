import './globals.css';

export const metadata = {
  title: 'Noor-ul-ain Islam — Cybersecurity & Design',
  description: 'Portfolio of Noor-ul-ain Islam — Cybersecurity Graduate, AI Security Researcher & Creative Designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
