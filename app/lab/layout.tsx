import { Inter, DM_Serif_Display } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest-wod.json" />
        <meta name="theme-color" content="#0B1426" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="WOD Timer" />
        <link rel="apple-touch-icon" href="/images/wod-icon-192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
