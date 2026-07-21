import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar({ setIsLoggedIn }){
    const navigate = useNavigate();
function handleLogout() {
    setIsLoggedIn(false);
    navigate("/");
}   
    return (
        <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
           <div className="flex gap-6">
            <Link to="/home"className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about"className="text-gray-700 hover:text-blue-600 font-medium">About</Link>        
            <Link to="/contact"className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            </div>
            <div className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
           <button onClick={handleLogout}>
               Logout
            </button>
            </div>
        </div>
    )
}
export default Navbar;
