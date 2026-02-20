export default function StudentCard({student}: {student: any}) {
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <p>Teacher ID: {student.teacherId}</p>
        </div>
    );
}