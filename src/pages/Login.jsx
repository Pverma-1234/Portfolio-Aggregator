import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("https://webhook.site/YOUR-ID", {
      method: "POST",
      body: JSON.stringify({ user: "Someone tried to login!" }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input className="border w-full mb-4 p-2" type="text" placeholder="Username" />
        <input className="border w-full mb-4 p-2" type="password" placeholder="Password" />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 w-full rounded">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
