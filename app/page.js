"use client";
import Image from "next/image";
import Greate from "./components/todo";
import { Content } from "./components/contents";
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

        
        <Greate />
        <Content/>
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
