import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="text-lg text-zinc-500">Page Not Found</p>
      <Link 
        href="/"
        className="text-blue-600 hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
}
