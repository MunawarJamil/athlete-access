 import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";  
import StoreProvider from "./Store-Provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
 weight: "100 900",
});

export const metadata = {
  title: "Power_Access",
  description: "Get your desired products to build your dream body"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <div className = "fixed top-0 left-0 w-full z-10">
            <Navbar />
          </div>
          <div className="mt-16 ">
          {children}
          </div>
          
        </StoreProvider>
      </body>
    </html>
  );
}
