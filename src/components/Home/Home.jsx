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
      <div className="flex gap-2">
        <div className="w-3/4 border">
          {teachers.map((teacher) => (
            <Teacher key={teacher.id} teacher={teacher}></Teacher>
          ))}
        </div>
        <div className="w-1/4 border">
          <h2>Book tution shedual</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
