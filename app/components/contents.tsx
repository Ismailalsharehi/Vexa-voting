import { useState } from "react";

export const Content = ()=>{

  console.log("Counter Component");
  const [count, setCount]= useState(0);
  return(

    <div>
      <button onClick ={()=>setCount(count+1)} >Clicked {count}</button>


    </div>
  );

}