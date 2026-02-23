import LogoutButton from "../components/LoginButton";
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div className="p-8">
      <header className="flex justify-between items-center mb-6 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        <LogoutButton />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user: any) => (
          <div key={user.id} className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <div className="text-sm space-y-1">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Location:</strong> {user.address.suite},{" "}
                {user.address.street}, {user.address.city}
              </p>
              <p>
                <strong>Company:</strong> {user.company.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
