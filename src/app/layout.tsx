import type { Metadata } from "next";
import { Fraunces, Literata } from "next/font/google";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "https://kapuluan-bioregion.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Kapuluan — Philippine Bioregion Atlas",
    template: "%s · Kapuluan",
  },
  description:
    "Living by watershed & sea — a public knowledge commons of place-based organizers in the Philippines.",
  openGraph: {
    title: "Kapuluan — Philippine Bioregion Atlas",
    description: "Living by watershed & sea",
    type: "website",
    images: [{ url: `${SITE}/og/preview.png`, width: 1200, height: 630 }],
    videos: [
      {
        url: `${SITE}/og/preview.mp4`,
        secureUrl: `${SITE}/og/preview.mp4`,
        type: "video/mp4",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "player",
    title: "Kapuluan — Philippine Bioregion Atlas",
    description: "Living by watershed & sea",
    images: [`${SITE}/og/preview.png`],
    players: [
      { playerUrl: `${SITE}/og/player.html`, streamUrl: `${SITE}/og/preview.mp4`, width: 1200, height: 630 },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${literata.variable} ${fraunces.variable} min-h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
