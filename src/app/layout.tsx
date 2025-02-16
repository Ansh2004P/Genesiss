import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import StartupClient from "@/components/Header/Startup/StartupClient/StartupClient";

const inter = Inter({ subsets: ["greek", "latin-ext"] });

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-StartupBackground font-MonaSans"}>
        <StartupClient>{children}</StartupClient>
      </body>
    </html>
  );
}
