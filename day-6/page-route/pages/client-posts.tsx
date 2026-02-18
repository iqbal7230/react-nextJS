"use client"
import { use, useEffect, useState } from "react"

export interface Post{
    userId:number,
    id : number,
    title:string,
    body:string
}
export default function ClientPosts(){

    const[data, setData] = useState<Post[]>([])
   
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data:Post[] = await res.json()
            setData(data)
        }
        fetchData()
    },[])

    return(
        <div>
            <h1>Client Posts</h1>
            <ul>
                {data.map((post)=>(
                    <div key={post.id} style={{
                        border:"2px solid white",
                        margin:"10px",
                        padding:"10px",
                       
                    }}>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}   

// What happens?
//  Page loads first
//  Then browser fetches data
//  Not SEO friendly