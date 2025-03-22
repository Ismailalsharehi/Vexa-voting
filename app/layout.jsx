import { Geist, Geist_Mono, Lalezar } from "next/font/google";
import Link from "next/link";
import "./globals.css";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";

// import './css/bootstrap.min.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const lalezer = Lalezar({
  subsets: ["arabic"],
  weight:['400'],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <h1 className={lalezer.className}>اسماعيل الشارحي</h1>
         */}
        {/* <Navbar /> */}
        {/* <header className="bg-slate-900 text-white p-4 text-center">
        
        </header> */}
        
        {children}

        {/* <footer className="bg-slate-900 text-white p-4 text-center">
          <p>This is the Footer Tags </p>
        </footer> */}
        

      </body>
    </html>
  );
}
