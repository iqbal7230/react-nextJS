import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold tracking-wide">
          Next Page Router
        </h1>

        <nav className="space-x-6 text-sm md:text-base">
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link href="/posts" className="hover:text-gray-200 transition">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
