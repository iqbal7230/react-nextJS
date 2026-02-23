
import { Student, Teacher} from "../page";


export async function fetchStudents(){
    const data = await fetch("http://localhost:3000/student");
    const res = await data.json();
    return res;
}
export async function fetchTeachers(){
    const data = await fetch("http://localhost:3000/teacher");
    const res = await data.json();
    return res;
}
export default async function StudentTeacher() {
    const students = await fetchStudents();
    const teachers = await fetchTeachers();

    return (
        <div className="flex flex-wrap gap-4">
            {students.map((student: Student) => (
                <div key={student.id} className="m-2">
            
                    {teachers.map((teacher: Teacher) => (
                        teacher.id === student.teacherId && 
                        <div className="border border-gray-200 rounded-lg p-4">
                        <p>Student ID: {student.id}</p>
                        <p>Student Name: {student.name}</p>
                        <p>Student Age: {student.age}</p>
                        <p>Student Grade: {student.grade}</p>
                        <p>Teacher Name: {teacher.name}</p>
                        <p>Teacher Subject: {teacher.subject}</p>
                        <p>Teacher Email: {teacher.email}</p>
                        <p>Teacher Experience: {teacher.experience}</p>
                        </div>

                    ))}
                </div>
            ))}
        </div>
    );
}