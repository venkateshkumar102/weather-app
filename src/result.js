import React from "react";
import "./css/result.css";

const Result = ({temp,des,settemp}) =>{
    return(
        <div className="rcard">
            <div className="rcon">
                <h1>Temperature : {temp} °C</h1>
                <p>{des}</p>
                <button onClick={() => settemp("")}>Back</button>
            </div>

        </div>

    );

};
export default Result;