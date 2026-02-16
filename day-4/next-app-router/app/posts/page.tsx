
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: Post[] = await res.json();
  return data.slice(0, 10);
}


const Posts = async (): Promise<JSX.Element> => {
  const posts = await getPosts();

  return (
       <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Posts 
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              {post.title}
            </h3>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
