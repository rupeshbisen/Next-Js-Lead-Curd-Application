import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";

const lora = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Lead Application",
  description: "Lead Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <div className='min-h-screen'>
          <Navbar />
          <main className='flex flex-col mt-[76px] md:mt-[92px]'>{children}</main>
          <Notification />
        </div>
      </body>
    </html>
  );
}
