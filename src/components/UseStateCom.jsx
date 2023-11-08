import React, {useState} from 'react'

export default function UseStateCom() {
    const [count,setCount] = useState(0);
  return (
    <div>
       value1:{count}
             <button onClick ={()=>{
        setCount(count+1)
      }}>Tang</button>
    </div>
  )
}
