import React, { useEffect, useState } from "react";
import Teacher from "./Teacher";

const Home = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div>
      <h2>Teachers found: {teachers.length}</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher}></Teacher>
        ))}
      </div>
    </div>
  );
};

export default Home;
