import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-extrabold text-gray-800">
        Welcome to Page Router App
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Pages Router + TypeScript + Tailwind CSS
      </p>

      <div className="mt-8">
        <a
          href="/posts"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          View Posts
        </a>
      </div>
    </div>
  );
};

export default Home;
