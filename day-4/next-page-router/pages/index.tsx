import type { NextPage } from "next";
import "../styles/globals.css";

const Home: NextPage = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Page Router 
      </h1>
      <p className="mt-4 text-gray-600">
        Traditional Next.js Routing with Type Safety
      </p>
    </div>
  );
};

export default Home;
