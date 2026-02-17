import NotFound from "@/components/not-found";
import Link from "next/link";

interface User {
    id: number;
    name: string;
    username: string;
}

export default async function UserList() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await response.json();
    // console.log(data);

    if (!Array.isArray(data)) return <NotFound />;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-3xl font-bold tracking-tight">User List</h1>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((user) => (
                    <li key={user.id}>
                        <Link
                            href={`/users/${user.id}`}
                            className="block rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-zinc-300"
                        >
                            <h2 className="text-xl font-semibold">{user.name}</h2>
                            <p className="mt-2 text-zinc-500">@{user.username}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}