import React from "react";

function Signin(){
    return(
        <div className='signindiv'>
            <br /><br /><br />
        
            <input type="text" placeholder='Name' className='input'/><br /><br />
            <input type="password" placeholder='Password' className='input' /><br /><br />
            <button><h2>Submit</h2></button>
        </div>
    )
}

export default Signin;