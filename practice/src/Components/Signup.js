import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials,setCredentials]=useState({name:"",email:"",password:""})
      const navigate = useNavigate();

  const handleSubmit =async(e)=>{
        e.preventDefault()
        const {name,email,password} = credentials
      const response = await fetch("https://inotee.onrender.com/api/auth/signup",{
      method:"POST", 
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({name,email,password}),  
    })
    const json = await response.json()
    console.log(json)
      localStorage.setItem('token',json.token)
      navigate("/about");
  }
    const onchange =(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
    }

  return (
    <div className="dark-background">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="name" className="form-label mt-4">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={credentials.name}
              onChange={onchange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              name="email"
              value={credentials.email}
              onChange={onchange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input type="password" 
            className="form-control" 
            id="Password" 
            name="password" 
            value={credentials.password}
            onChange={onchange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup
