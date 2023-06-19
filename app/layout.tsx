"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";

export const metadata = {
  title: "Furniday",
  description: "Furniture for your day",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AnimatePresence mode="wait">
        <body>
          <Navbar />
          {children}
        </body>
      </AnimatePresence>
    </html>
  );
}
