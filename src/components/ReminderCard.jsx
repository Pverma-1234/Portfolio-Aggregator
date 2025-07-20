export default function ReminderCard({ title, type, date }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-4">
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-gray-600">{type}</p>
      <p className="text-sm text-blue-500">{new Date(date).toLocaleString()}</p>
    </div>
  );
}
