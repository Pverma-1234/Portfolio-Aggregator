import React from "react";

const events = [
  {
    title: "Tech Club Meeting",
    date: "22 July 2025",
    time: "5:00 PM",
    type: "Club Event",
  },
  {
    title: "Submit Assignment 3",
    date: "21 July 2025",
    time: "11:59 PM",
    type: "Deadline",
  },
  {
    title: "Coding Contest",
    date: "25 July 2025",
    time: "6:00 PM",
    type: "Competition",
  },
];

const Events = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">📋 All Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow hover:shadow-md border-l-4 border-blue-600"
          >
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-500">{event.type}</p>
            <p className="text-sm text-gray-400">
              {event.date}, {event.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
