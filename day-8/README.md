# API-Routes Assignment

## Features

- **Static Data Source:** Contains a mocked data dataset with 5 teachers and 30 students (`data/data.ts`).
- **API Routes:**
  - `GET /teacher`: Fetches the entire list of teachers.
  - `GET /student`: Fetches the entire list of students.
- **Interactive UI:**
  - **Home Page (`/`)**: Allows users to toggle between viewing the list of teachers and the list of students using Client Components and state management.
  - **Combined View (`/student-teacher`)**:  Fetching both students and teachers on the server and rendering a combined view where each student is displayed along with their assigned teacher's details.

## Assignment Question

- Create a JSON/data file with 5 records of teachers and 30 records of students.
- Create an API endpoint to fetch the list of all the teachers.
- Create an API endpoint to fetch the list of all the students.
- Create a view to fetch the list of students who are under a specific teacher (Implemented via UI on `/student-teacher`).
- Optional: Create an endpoint to add a teacher to the list.

