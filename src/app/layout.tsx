import { Inter } from "next/font/google";
import "@/styles/globals.css";
import React, { Suspense } from "react";
import AppContext from "@/lib/context";
import dynamic from "next/dynamic";
import BottomNav from "@/components/bottom-nav";
import { MapMarker } from "@/components/ui/markers";

const CampusMap = dynamic(() => import('@/components/campus-map'), { ssr: false })

const inter = Inter({ subsets: ["latin"] });
const scrollbar = 'scrollbar-thumb-gray-500 scrollbar-track-transparent';

export const metadata = {
  title: "MINA",
  description: "MSU-IIT Navigation Aid",
};


const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppContext>
      <html lang="en" className={`${inter.className} ${scrollbar} text-white text-sm overflow-hidden`}>
        <body className='relative'>
          <main className='relative h-screen w-screen bg-gray-200'>
            {children}
            <CampusMap>
              <Suspense>
                <MapMarker />
              </Suspense>
            </CampusMap>
          </main>

          <footer>
            <BottomNav />
          </footer>
        </body>
      </html>
    </AppContext>
  );
}


export default RootLayout;
