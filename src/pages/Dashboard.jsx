function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <ul className="space-y-4">
        <li className="bg-green-100 p-4 rounded">📘 Mid-Term: 1 Aug 2025</li>
        <li className="bg-blue-100 p-4 rounded">🎉 Holiday: 15 Aug 2025</li>
        <li className="bg-yellow-100 p-4 rounded">📅 Event: Tech Fest - 20 Aug 2025</li>
        <li className="bg-red-100 p-4 rounded">📝 End-Term: 10 Sep 2025</li>
      </ul>
    </div>
  );
}

export default Dashboard;
