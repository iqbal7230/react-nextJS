
// In Page Router repo implement examples of: 
// - Client-side fetching 
// - Server side fetching in a dynamic route using getServerSideProps 

import Link from "next/link";


export default function Home() {
  return (
    <div>
       <h1>page route data fetching</h1>
       <ul>
        <li><Link href="/client-posts">Client Posts</Link></li>
         <li><Link href="/ssr-posts/1">SSR Post 1</Link></li>
         <li><Link href="/ssr-posts/2">SSR Post 2</Link></li>
         <li><Link href="/ssr-posts/3">SSR Post 3</Link></li>
         <br/>
         <li><Link href="/ssg-post/1">SSG Post 1</Link></li>
         <li><Link href="/ssg-post/2">SSG Post 2</Link></li>
         <li><Link href="/ssg-post/3">SSG Post 3</Link></li>
       </ul>
    </div>
  );
}


