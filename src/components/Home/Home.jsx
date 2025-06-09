import React, { useEffect, useState } from "react";
import Teacher from "./Teacher";
import AddShedual from "../addShedual/AddShedual";

const Home = () => {
  const [teachers, setTeachers] = useState([]);
  const [shedual, setShedual] = useState([]);
  console.log(shedual);
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
            <Teacher
              key={teacher.id}
              setShedual={setShedual}
              shedual={shedual}
              teacher={teacher}
            ></Teacher>
          ))}
        </div>
        <div className="w-1/4 border">
          <AddShedual shedual={shedual} />
        </div>
      </div>
    </div>
  );
};

export default Home;
