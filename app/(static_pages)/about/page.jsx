"use client";
import { useRouter } from "next/navigation";

export default function About(){
  const router = useRouter();
  return (
    <div>
    <div>This Is the About Page</div>
    <button onClick={()=>router.push("/")} className="bg-blue-500 text-white p-2 rounded-md">Go home</button>
    </div>
  );
}