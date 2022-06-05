import {  useState } from "react";
import "./index.css";

export default function App() {

   const [data, setData] = useState("");
   const [buddy, setBuddy] = useState([]);
   const changeHandler = (e) =>{
     setData(e.target.value)
   }

   const delBuddy = (id) =>{
     const delData = buddy.filter((x)=> x.id !== id)
     setBuddy(delData)
   }


  const submitHandler = (e) =>{
    e.preventDefault();
    const totalBuddy = {
      id : Math.random(),
      text : data,
    }
    setData("");
    setBuddy([totalBuddy,...buddy])
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
     Enter your Buddy name : 
     <input type="text"
            value={data}
            onChange={changeHandler}/>
     
     <button>Submit</button>
     
     </form>

     <h4>Your Buddy List below:</h4>
    
    {buddy.length>0 &&buddy.map((x)=>{
      return( <div key={x.id}>
      {x.text}<button onClick={()=>delBuddy(x.id)}>Del</button>
      </div>)
    })}
    
    </div>
  );
}
