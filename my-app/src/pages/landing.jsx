import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-200">

      <div className="bg-white p-10 rounded-xl shadow-xl text-center w-125">

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Welcome Mahad 
        </h1>

        <p className="text-gray-600 mb-8">
          You have successfully logged in.
        </p>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Landing;