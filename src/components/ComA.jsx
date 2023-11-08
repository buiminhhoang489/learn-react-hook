import React, { useEffect, useState } from 'react'

export default function ComA() {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    console.log("component reload")
        useEffect(()=>
    {document.getElementById("test").style.color = "red";
        console.log("chay roi nhe")},[count,count2 ]
    )
  return (
    <div id = "test">
        value1:{count}
        value2:{count2}
      <button onClick ={()=>{
        setCount(count+1)
      }}>Tang</button>
 <button onClick ={()=>{
        setCount2(count2+1)
      }}>Tang2</button>

    </div>
  )
}
