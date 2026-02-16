import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Next App Router</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/posts" className="hover:text-blue-400">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
