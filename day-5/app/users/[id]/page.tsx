import Link from "next/link";

export default async function UserById({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/users" className="mb-4 inline-block text-sm text-zinc-500 hover:text-black">
                &larr; Back to Users
            </Link>
            <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
                <div className="border-b border-zinc-200 px-6 py-4">
                    <h1 className="text-2xl font-bold">{data.name}</h1>
                    <p className="text-sm text-zinc-500">@{data.username}</p>
                </div>
                <div className="grid gap-6 px-6 py-4 sm:grid-cols-2">
                    <div>
                        <h3 className="mb-2 text-sm font-medium text-zinc-500">Contact Info</h3>
                        <ul className="space-y-1 text-sm">
                            <li><span className="font-medium">Email:</span> {data.email}</li>
                            <li><span className="font-medium">Phone:</span> {data.phone}</li>
                            <li><span className="font-medium">Website:</span> {data.website}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 text-sm font-medium text-zinc-500">Address</h3>
                        <ul className="space-y-1 text-sm">
                            <li>{data.address.street}, {data.address.suite}</li>
                            <li>{data.address.city}, {data.address.zipcode}</li>
                        </ul>
                    </div>
                    <div className="sm:col-span-2">
                         <h3 className="mb-2 text-sm font-medium text-zinc-500">Company</h3>
                         <p className="text-sm">{data.company.name}</p>
                    </div>
                </div>
                <div className="border-t border-zinc-200 px-6 py-4 bg-zinc-50">
                    <Link 
                        href={`/users/${id}/todos`}
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        View Todos
                    </Link>
                </div>
            </div>
        </div>
    )
}