interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const revalidate = 10;

export async function generateStaticParams() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts: Post[] = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.json();
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 
  const post = await getPost(id);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{marginBottom:"20px"}}>ISR with generateStaticParams</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
