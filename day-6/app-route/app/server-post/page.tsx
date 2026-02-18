import { Post } from "../client-post/page";

async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "no-store" } // ensures dynamic rendering
  );
  return res.json();
}

export default async function ServerPosts() {
  const posts = await getPosts();

  return (
    <div style={{ padding: "20px"}}>
      <h1 style={{marginBottom:"20px"}}>Server Component </h1>
      {posts.map((post) => (
        <div key={post.id} style={{
            border:"2px solid white",
            margin:"10px",
            padding:"10px"
        }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
