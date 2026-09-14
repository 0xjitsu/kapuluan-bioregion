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

export const metadata: Metadata = {
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
