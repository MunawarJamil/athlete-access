'use client'; 
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
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

// export const metadata = {
//   title: "Power_Access",
//   description: "Get your desired products to build your dream body",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <div className="fixed top-0 left-0 w-full z-10">
            <Navbar />
          </div>
          {children}
        </Provider>
      </body>
    </html>
  );
}
