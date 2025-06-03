import { Link } from "react-router-dom";
import WeeklyAvailability from "../../utils/WeeklyAvailability";

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
    <div className="max-w-xs m-4 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt="Teacher Image"
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-800">{subject} Teacher</p>
          <h2>Fees: ৳ {fees}</h2>
        </div>
        {/* <div className="flex space-x-4">
          {available_days.map((day) => (
            <p className="btn p-2 shadow-xl/30 rounded-2xl">{day}</p>
          ))}
        </div> */}
        <WeeklyAvailability availableDays={teacher.available_days} />
        <div className="text-center mt-4">
          <Link
            to={`/teacher/${teacher.id}`}
            className="inline-block px-4 py-2 btn text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
