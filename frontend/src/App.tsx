import { useEffect, useState } from 'react';
import './App.css';

interface Course {
  id: number;
  title: string;
  description: string;
}

const CourseCard = ({ course }: { course: Course }) => (
  <div className="card">
    <h3>{course.title}</h3>
    <p>{course.description}</p>
  </div>
);

function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch('/api/courses')
      .then(res => res.json())
      .then(setCourses);
  }, []);

  return (
    <div className="App">
      <h1>Courses</h1>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default App;
