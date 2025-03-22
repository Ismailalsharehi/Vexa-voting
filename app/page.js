"use client";
import Image from "next/image";
import Index from "./pages/index";
// import Greete from "./components/todo";
// import { Counter } from "./components/counter";
// import { useEffect } from "react";

export default function Home() {
  return (

    <div>
      <div className="main-div"> 
        <h1> this is the main page  </h1>
      </div>

      <div>
        <Index />

        
      
      </div>
    </div>
  );
}

// export function MyApp({Component,pageProps}) {
//   useEffect(()=> {
//     import('./js/bootstrap.bundle.js');
//   }, []);
//   return <Component {...pageProps} />;
// }
