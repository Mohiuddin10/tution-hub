import { Link } from "react-router-dom";
import WeeklyAvailability from "../../utils/WeeklyAvailability";
import { LuHeart } from "react-icons/lu";

const Teacher = ({ teacher }) => {
  const { name, subject, image, available_days, fees, id } = teacher;
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
        </div>
      </div>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="flex align-middle justify-between">
          <h2 className="text-xl font-bold">Fees: ৳ {fees}</h2>
          <button datatheme="light" className="btn">
            <LuHeart />
          </button>
        </div>

        <div className="text-center flex mt-4">
          <WeeklyAvailability availableDays={teacher.available_days} />
          <div className="flex flex-col gap-4">
            <Link
              to={`/teacher/${teacher.id}`}
              className="inline-block px-4 py-2 btn text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Book Tution
            </Link>
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
