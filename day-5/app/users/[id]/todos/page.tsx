import Link from "next/link";

export default async function UserTodosById({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    const data = await response.json()

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href={`/users/${id}`} className="mb-4 inline-block text-sm text-zinc-500 hover:text-black">
                &larr; Back to User Details
            </Link>
            <h1 className="mb-8 text-3xl font-bold tracking-tight">User {id} Todos</h1>
            <ul className="space-y-4">
                {
                    data.map((todo: any) => (
                        <li key={todo.id} className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:bg-zinc-50">
                            <span className={`font-medium ${todo.completed ? "text-zinc-500 line-through" : ""}`}>
                                {todo.title}
                            </span>
                             <span 
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                    todo.completed 
                                    ? "bg-green-100 text-green-800" 
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                            >
                                {todo.completed ? "Completed" : "Pending"}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}