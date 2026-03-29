import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

import Room from "./Room";

export const metadata: Metadata = {
  title: "FigPro | Real-Time Collaborative Whiteboard",
  description:
    "A collaborative whiteboard with real-time cursors, comments, reactions, and canvas editing.",
  applicationName: "FigPro",
  authors: [
    { name: "Mykhailo Yarytskiy", url: "https://github.com/mmmihaeel" },
  ],
  creator: "Mykhailo Yarytskiy",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={`${workSans.className} bg-primary-grey-200`}>
      <Room>
        <TooltipProvider>{children}</TooltipProvider>
      </Room>
    </body>
  </html>
);

export default RootLayout;
