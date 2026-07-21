import { useState } from "react";
import Login from "./pages/login";
import Home from "./pages/home";
import ProtectedLayout from "./components/ProtectedLayout";
import About from "./pages/about";
import Contact from "./pages/contact";
import Notfound from "./pages/notFound";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-200">
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
    element={
        <ProtectedLayout
         isLoggedIn={isLoggedIn}
         setIsLoggedIn={setIsLoggedIn}
       />
        }
       >
      <Route path="/about" element={
        <About/>
        } 
        />
      <Route path="/contact" element={
        <Contact/>
        }
        />
      <Route
        path="/home"
        element={
            <Home />
        }
      />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
    </div>
  );
}

export default App;
