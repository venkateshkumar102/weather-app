import React from 'react'
import "./css/login.css";
const Login = ({input,setinput,weather}) => {
    const handlechange = (event) => {
        setinput(event.target.value);
    };
const handleclick = (event) => {
    event.preventDefault();
    weather();
};
    return (
        <div>
        <div className='card'>
            <div className='con'>
                <h1>weather app</h1>
            <form className='card-form'>
                <input type="text" placeholder='city name'  onChange={handlechange} value={input}/>
                <br/>
                <button type='submit' onClick={handleclick}>search</button>
                
            </form>
        </div>

        </div>
        </div>
    )
}

export default Login;
