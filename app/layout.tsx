import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/src/components/common/header";
import Button from "@/src/components/common/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dori Bor",
  description: "Дорихоналар каталоги",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-gray-100" lang="en">
      <body className={inter.className}>
        <Header />
        {/*<Button title="Дорихонани қўшиш" />*/}
        {children}
      </body>
    </html>
  );
}
