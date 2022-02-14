import React , {useState} from 'react';
import './Register.css'
import {Link} from "react-router-dom";

const Register =()=>{

    const[roll,setRoll]=useState('');
    const[userName,setuserName]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return(
        <><p> 
        Already have an Account?
        <Link to='/'>Sign In</Link>
    </p>
    <h1>Create Account</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <h5>Full Name</h5>
            <input type="text" value={roll} onChange={(e)=>{setRoll(e.target.value)}}/>
        </div>
        <div>
            <h5>Roll</h5>
            <input type="text" value={userName} onChange={(e)=>{setuserName(e.target.value)}}/>
        </div>
        <div>
            <h5>Password</h5>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <input type="submit" value="Submit"/>
    </form>
    </>
)
};


export default Register;