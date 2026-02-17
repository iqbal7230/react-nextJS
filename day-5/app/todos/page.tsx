
import Link from "next/link";

export default async function Todos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    // console.log(data) 

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-3xl font-bold tracking-tight">All Todos</h1>
            <div className="space-y-4">
                {
                    data.map((todo: any) => (
                        <div key={todo.id} className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:bg-zinc-50">
                            <div className="flex flex-col gap-1">
                                <Link 
                                    href={`/users/${todo.userId}`} 
                                    className="text-xs font-medium text-zinc-500 hover:text-blue-600"
                                >
                                    User #{todo.userId}
                                </Link>
                                <span className={todo.completed ? "text-zinc-500 line-through" : "font-medium"}>
                                    {todo.title}
                                </span>
                            </div>
                            <span 
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                    todo.completed 
                                    ? "bg-green-100 text-green-800" 
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                            >
                                {todo.completed ? "Completed" : "Pending"}
                            </span>
                        </div>
                    ))   
                }
            </div>
        </div>
    )
}