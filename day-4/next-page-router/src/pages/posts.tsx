import type { GetServerSideProps, NextPage } from "next";

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
        Latest Posts
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-3 capitalize">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
