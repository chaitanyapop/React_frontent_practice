
import { useState } from "react";

function Stopwatch() {
 var array_one=[]
 const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for(var i=0;i<=99;i++)
  {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    array_one.push(result)
  }
  return (
    <div className="container">
      <>
          {array_one.map((data)=>(
            <p>{data}</p>
          ))}
      </>
    </div>
    
  );
}
export default Stopwatch;