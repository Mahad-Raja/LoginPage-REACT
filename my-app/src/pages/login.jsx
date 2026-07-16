import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "Mahad" && password === "123") {
      setIsLoggedIn(true);
      navigate("/landing");
    } else {
      alert("Invalid Username or Password");
    }
  }

 return (
  <div className="flex justify-center items-center h-screen bg-slate-200">
    <div className="bg-white p-8 rounded-xl shadow-xl w-96">

      <h1 className="text-3xl font-bold text-center mb-6">
        Login
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

      </form>

    </div>
  </div>
);
}

export default Login;