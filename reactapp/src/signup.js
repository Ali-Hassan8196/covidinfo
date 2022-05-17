import React from "react";

function Signup(){
    const onsubmits=(e)=>{
       e.preventDefault();
    }
    return(
        <>
        
        <div className='signupdiv'>
            
            <form onSubmit={onsubmits}>
            <input type="text" placeholder='name' className='input' /><br /><br />
            <input type="text" placeholder='father name' className='input' /><br /><br />
            <input type="text" placeholder='address' className='input' /><br /><br />
           
           <div className='radiodiv'>
            <h3>Are you vaccinated?</h3>
            <input type="radio" className='inputradio' id='in1' name='option' />
            <label htmlFor="in1" className='label1'>Yes</label>
            <input type="radio" className='inputradio' id='in2' name='option' />
            <label htmlFor="in2" className='label2'>No</label>
           </div><br />
           
            
            <input type="text" placeholder='1st vaccination date' className='input' /><br /><br />
            <input type="text" placeholder='2nd vaccination date' className='input' /><br /><br />
            <input type="text" placeholder='vaccination name' className='input' /><br /><br />
            <input type="text" placeholder='vaccination center' className='input' /><br /><br />
            <button type="submit" onClick={onsubmits}><h2>Sign Up</h2></button>
            </form>
        </div>
        </>
    )
}

export default Signup;
