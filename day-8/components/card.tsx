export default function Card({res}: {res: any}) {
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <p>Name: {res.name}</p>
            <p>Subject: {res.subject}</p>
            <p>Email: {res.email}</p>
            <p>Experience: {res.experience}</p>
        </div>
    );
}