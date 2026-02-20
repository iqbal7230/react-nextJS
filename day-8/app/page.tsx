"use client"

import Card from "@/components/card";
import StudentCard from "@/components/studentCard";
import Link from "next/link";
import { useState } from "react";

export interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
  experience: number;
}
export interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  teacherId: number;
}

export default function Home() {
  const [teacher, setTeacher] = useState<Teacher[]>([]);
  const [student, setStudent] = useState<Student[]>([]);
  const [view, setView] = useState<"teacher" | "student">("teacher");

  async function fetchTeachers(){
    const data = await fetch("/teacher");
    const res = await data.json();
    setView("teacher");
    setTeacher(res);
  }
  async function fetchStudents(){
    const data = await fetch("/student");
    const res = await data.json();
    setView("student");
    setStudent(res);
  }

  return (
    <div>
     
      <button onClick={fetchTeachers} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg m-4">Fetch Teachers</button>
      <button onClick={fetchStudents} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg m-4">Fetch Students</button>
      <Link href="/student-teacher"><button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg m-4">Get student with teacher</button></Link>
      <div className="flex flex-wrap gap-4"> 
      {
        view === "teacher" && 
        teacher.map((teacher) => (  
          <Card key={teacher.id} res={teacher} />  
        ))
      }
      {
        view === "student" &&
        student.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))
      }
      </div>
    </div>
  );
}
