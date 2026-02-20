"use client"

export default function Home() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const action = (document.activeElement as HTMLButtonElement).value;

    if (action === "add") {
      const data = await fetch("/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const res = await data.json();
      console.log("Add response:", res);
      alert(res.message);
    } else if (action === "delete") {
      const data = await fetch("/blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      const res = await data.json();
      console.log("Delete response:", res);
      alert(res.message);
    }

    e.currentTarget.reset();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Management</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button type="submit" value="add" style={{ padding: "8px", flex: 1, cursor: "pointer" }}>Add User</button>
          <button type="submit" value="delete" style={{ padding: "8px", flex: 1, backgroundColor: "#ff4d4d", color: "white", border: "none", cursor: "pointer" }}>Delete User</button>
        </div>
      </form>
    </div>
  );
}
