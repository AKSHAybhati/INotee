import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [credentials,setCredentials]=useState({email:"",password:""})
    const navigate = useNavigate();

    const handleSubmit =async(e)=>{
        e.preventDefault()
      const response = await fetch("https://inotee.onrender.com//api/auth/login",{
      method:"POST", 
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password}),
    })
    const json = await response.json()
    console.log(json)
    if(json.success){
      localStorage.setItem('token',json.token)
      navigate("/about");

    }else{
      alert("invalid credentials")
    }}

    const onchange =(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
    }

  return (
    <div className="dark-background">
      <form onSubmit={handleSubmit}>
        <div className="container">
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onchange}
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onchange}
            name="password"
            id="password"
          />
        </div>
        <button 
        type="submit" 
        className="btn btn-primary"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;