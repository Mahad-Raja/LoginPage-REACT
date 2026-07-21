import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function NotFound(){
    const navigate = useNavigate();
useEffect(() => {

    setTimeout(() => {

        navigate("/");

    }, 3000);

}, []);
    return(
       <div className="flex justify-center items-center min-h-[80vh]">
    <div className="bg-white p-10 rounded-xl shadow-lg w-[600px] text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                404 PAGE NOT FOUND</h1>
                
                <p className="text-gray-600 leading-7">
                   You are trying to access a page which doesnt exist!!!!
                </p>

            </div>
        </div>
    );
}
export default NotFound;
