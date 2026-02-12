import { useState } from "react";

const Counter =()=>{
    const[count, setCount]= useState(0)

    const handleCounter =()=>{
        setCount(count+1);
    }
    const handleCounterDecrease=()=>{
        setCount(count-1)
    }
    
    return(
        <div className="container">
            <p>{count}</p>
            <button onClick={handleCounter}>Click to Increase count</button>
            <button onClick={handleCounterDecrease}>Click to decrease count</button>
        </div>

    )
}
export default Counter;