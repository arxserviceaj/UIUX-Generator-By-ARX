import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import {ClerkProvider} from'@clerk/nextjs';
import "./globals.css";
import Provider from "./provider";

const appFont = DM_Sans({
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "UIUX ARX Mockup Generator App",
  description: "Generate High Level Quality of UIUX Design By ARX AI ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
      className={appFont.className}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
