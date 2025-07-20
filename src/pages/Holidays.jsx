import React from "react";

const holidays = [
  {
    title: "Independence Day",
    date: "15 August 2025",
  },
  {
    title: "Mid-Sem Exam Start",
    date: "24 July 2025",
  },
  {
    title: "Diwali Break",
    date: "5 November 2025",
  },
];

const Holidays = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">🎉 Holidays & Exams</h2>
      <div className="space-y-4">
        {holidays.map((holiday, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow hover:shadow-md border-l-4 border-green-600"
          >
            <h3 className="text-xl font-semibold">{holiday.title}</h3>
            <p className="text-sm text-gray-500">{holiday.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;
