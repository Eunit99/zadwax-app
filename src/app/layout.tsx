import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Rubik } from "next/font/google";
import "./globals.css";





import localFont from 'next/font/local'



//👇 Configure our local font object
// const br_firma_black = localFont({ src: "../fonts/BR-Firma-Black.otf" });



const roboto = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zadwax App",
  description: "Zadwax App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className}  antialiased w-screen h-screen overflow-hidden bg-[#EAECF0]`}
      >
        <div
          className="flex h-screen font-sans antialiased"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
