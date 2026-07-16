import { useState} from "react";

function App() {
   const [user,userName]=useState("");
   const [password,setPassword]=useState("");
   
   function handleSubmit(event)
   {
    event.preventDefault();
    alert ("Welcome " + user)
   }

  return(
<div className=' flex justify-center'>
   <form onSubmit={handleSubmit} flex >
      <input className="bg-amber-900"
    type="text"
    value={user}
   placeholder="enter name"
   onChange={(event)=> userName(event.target.value)}
   />
   <br></br>
   <input 
   type="password"
    value={password}
   placeholder="enter password"
   onChange={(event)=> setPassword(event.target.value)}
   />
   <br></br>
     <button type="submit">
          Login
        </button>
   </form>
</div>
  );
}

export default App;