import { useState } from "react";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-slate-200">
    <Routes>
      <Route
        path="/"
        element={
          <Login
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      />

      <Route
        path="/landing"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Landing />
          </ProtectedRoute>
        }
      />
    </Routes>
    </div>
  );
}

export default App;