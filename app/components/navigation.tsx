"use client";
import  Link from "next/link";
import { usePathname } from "next/navigation";
export const Navigation =()=>{
  const pathname= usePathname();
  return(

    <nav>
      <Link href={"/"} className={pathname==="/" ? "font-bold mr-4" : "mr-4 text-blue-500"} >Home</Link>

      <Link href="/about" className={pathname==="/" ? "font-bold mr-4" : "mr-4 text-blue-500"}>About</Link>

    {/* <Link href="/about" className="mr-4 text-blue-500">Home</Link> */}

      <Link href= "portfolio/2" className={pathname.startsWith("/category/1") ? "font-bold mr-4" : "mr-4 text-blue-500"}>Products</Link>


    </nav>
  );
}