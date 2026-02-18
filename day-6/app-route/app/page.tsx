import Link from "next/link";

// - Static site generation in a dynamic route using getStaticProps and getStaticPaths (implement ISR as well)
export default function Home() {
  return (
    <div>
       <h1 style={{marginBottom:"20px"}}>App route data fetching</h1>
       <ul>
        <li><Link href="/client-post">Client Posts</Link></li>
         <li><Link href="/server-post">Server Post</Link></li>
         <li><Link href="/isr-post/1">ISR Post 1</Link></li>
         <li><Link href="/isr-post/2">ISR Post 2</Link></li>
         <li><Link href="/isr-post/3">ISR Post 3</Link></li>
         <br/>
         
       </ul>
    </div>
  );
}
