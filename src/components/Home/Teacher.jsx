import { Link } from "react-router-dom";
import WeeklyAvailability from "../../utils/WeeklyAvailability";
import { AiTwotoneLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { useEffect, useState } from "react";
import { checkLocalStorage, storeLocalStorage } from "../../utils/storeData";
import { useMatchDays } from "../../utils/useMatchDays";

const Teacher = ({ teacher, setShedual, shedual }) => {
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    const checkLiked = checkLocalStorage();
    setLiked(checkLiked);
  }, []);
  const { name, subject, image, fees, id, college, available_days } = teacher;
  const allDays = [
    { short: "Sat", full: "Saturday" },
    { short: "Sun", full: "Sunday" },
    { short: "Mon", full: "Monday" },
    { short: "Tue", full: "Tuesday" },
    { short: "Wed", full: "Wednesday" },
    { short: "Thu", full: "Thursday" },
    { short: "Fri", full: "Friday" },
  ];

  const handleDetailClick = (id) => {
    console.log(id);
    // Navigate to the detail page for the teacher
    window.location.href = `/teacher/${id}`;
  };

  const handleLikeClick = (id) => {
    console.log(`Liked teacher with ID: ${id}`);
    storeLocalStorage(id);
    setLiked(checkLocalStorage());

    // if (liked.includes(id)) {
    //   setLiked(liked.filter((likedId) => likedId !== id));
    // } else {
    //   setLiked([...liked, id]);
    // }
  };

  const handleShedual = (name, available_days, price) => {
    const matchDays = useMatchDays(shedual, available_days);
    console.log(matchDays);
    setShedual([...shedual, { name, available_days, price }]);

    // Here you can handle the scheduling logic, e.g., updating state or navigating
    // For now, we'll just log the ID
    // You might want to redirect to a scheduling page or show a modal
  };
  return (
    <div className="max-w-full m-4 p-2 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="flex gap-4">
        <img
          src={image}
          alt="Teacher Image"
          className="object-cover w-[60px] h-[60px] rounded-full shadow-2xl dark:bg-gray-500"
        />
        <div className="">
          <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-800">{subject} Teacher</p>
          <h2>College: {college}</h2>
        </div>
      </div>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="flex align-middle justify-between">
          <h2 className="text-xl font-bold">Fees: ৳ {fees}</h2>
          <button
            onClick={() => handleLikeClick(id)}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-200"
          >
            {liked.includes(id) ? (
              <AiFillLike className="text-2xl text-red-500" />
            ) : (
              <AiTwotoneLike className="text-2xl" />
            )}
          </button>
        </div>

        <div className="text-center flex mt-4">
          <WeeklyAvailability availableDays={teacher.available_days} />
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleShedual(name, available_days, fees)}
              className="inline-block px-4 py-2 btn text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Book Tution
            </button>
            <Link
              to={`/teacher/${teacher.id}`}
              className="inline-block px-4 py-2 btn text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-700"
            >
              Read More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
