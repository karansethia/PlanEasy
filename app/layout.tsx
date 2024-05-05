import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

import "./globals.css";

export const metadata: Metadata = {
  title: "PlanEasy",
  description: "Plan your events the easy way",
  icons: {
    icon: "../public/assets/images/logo.svg",
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
