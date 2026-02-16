import type { GetServerSideProps, NextPage } from "next";
import "../styles/globals.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps<
  PostsPageProps
> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: Post[] = await res.json();

  return {
    props: {
      posts: data.slice(0, 10),
    },
  };
};

const Posts: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Posts (Page Router + TypeScript)
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
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
