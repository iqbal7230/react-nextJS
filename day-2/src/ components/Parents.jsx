import { useState } from "react";


const Parents =()=>{
    const[message, setMessage] = useState("I am from Parents")
    return(
        <div>
            <p>{message}</p>
            <button onClick={()=>setMessage("Now I am changed")}>Change Me</button>
        </div>
    )
}
export default Parents;