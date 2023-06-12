// import { NavLink } from "react-router-dom";
import { useState } from "react";
import Validation from "../Validation/Validation";
// import {userDar}


const Form =({login})=>{
    
  
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event)=> {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
      setErrors(Validation({
        ...userData,
         [event.target.name]: event.target.value
      }))
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        login(userData);
       }
     

    return(
        <div>
        
           <form onSubmit={handelSubmit} >

            <label htmlFor="email">Email</label>
            <input type="text" name='email' value={userData.email}
            onChange={handleChange}/>
             {errors.email && <p>{errors.email}</p>}
            <br/>
            <label htmlFor="password"> password</label>
            <input type="password" name='password' value={userData.password}
            onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
            
             <button>Submit</button>

            </form>
            
        
        </div>
    )
    
}


export default Form;