"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    return `text-sm font-medium transition-colors hover:text-black ${
      isActive ? "text-black" : "text-zinc-500"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/75 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Todo App
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link href="/users" className={getLinkClasses("/users")}>
            Users
          </Link>
          <Link href="/todos" className={getLinkClasses("/todos")}>
            Todos
          </Link>
        </nav>
      </div>
    </header>
  );
}
