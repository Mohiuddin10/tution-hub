import { useEffect, useState } from "react";

const AddShedual = ({ shedual }) => {
  const [shedualList, setShedualList] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredShedual = data.find((item) => item.id === shedual);
        console.log(filteredShedual);
        setShedualList(shedualList.push(filteredShedual));
      });
  }, [shedual]);
  console.log(shedualList);
  console.log(shedual);
  return <div>{shedual}</div>;
};

export default AddShedual;
