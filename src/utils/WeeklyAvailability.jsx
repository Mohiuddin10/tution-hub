import React from "react";

const allDays = [
  { short: "Sat", full: "Saturday" },
  { short: "Sun", full: "Sunday" },
  { short: "Mon", full: "Monday" },
  { short: "Tue", full: "Tuesday" },
  { short: "Wed", full: "Wednesday" },
  { short: "Thu", full: "Thursday" },
  { short: "Fri", full: "Friday" },
];

const WeeklyAvailability = ({ availableDays }) => {
  return (
    <div className="grid grid-cols-3 gap-1 text-center text-sm mt-3">
      {allDays.map((day, index) => {
        const isAvailable = availableDays.includes(day.full);
        return (
          <div
            key={index}
            title={day.full}
            className={`btn w-10 h-10 items-center justify-center px-2 border align-middle p-4 rounded-md font-medium transition duration-200 ${
              isAvailable
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {day.short}
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyAvailability;
