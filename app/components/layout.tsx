
import Navbar from "@/components/Navbar";
// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Install - Landing Page UI",
//   description: "Welcome to the Landing Page UI - React Component Library",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="bg-slate-100 font-sans text-slate-700 dark:text-slate-200  dark:bg-darkBgColor  min-h-screen relative ">
          <div className="flex pt-[62px] flex-nowrap flex-col md:flex-row lg:flex-row relative h-screen overflow-y-scroll">
            <Navbar className="fixed z-30 top-0 left-0 w-full" />
            <div className="w-full lg:w-[80%] flex-1 md:pl-5 md:pr-5 ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
