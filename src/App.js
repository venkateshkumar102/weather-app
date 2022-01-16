import react, { useState } from "react";
import Login from "./input";
import axios from "axios";
import Result from "./result";

function App() {
  const [input,setinput] = useState("");
  const [temp,settemp]= useState("");
  const [des,setdes]= useState("");
  const weather = async () => {
    const apikey="11c15af8e18f4857ac1b5240648cfebb";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+apikey+"&units="+unit; 
    const response = await axios.get(url);
    const temp= await response.data.main.temp;
    const des= await response.data.weather[0].description;
    settemp(temp);
    setdes(des);
    setinput("");
  }
  return (
    <div className="App">
      {temp ===""?(
     <Login input={input} setinput={setinput} weather={weather}/>
     ):(<Result temp={temp} des={des} settemp={settemp}/>)
      }
    </div>
  );
}

export default App;
