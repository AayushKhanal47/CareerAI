import React, { useState } from "react";
import "../auth.form.scss";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const[email,setEmail]= useState("")
  const[password,setPassword] = useState("")
  const[usename, setUsername]= useState("")

  const {loading, handleRegister} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({usename, email, password})
    navigate("/")
  };
  if(loading){
    return(<main><h1>Loading....</h1></main>)
  }

  return (
    <main>
      <div className="form-container">
        <h1>Create account</h1>
        <p className="form-subtitle">Join us today, it's free</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
            onChange={(e)=>{setUsername(e.target.value)}}
              type="text"
              id="username"
              name="username"
              placeholder="e.g. aayush_dev"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
            onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
            onChange={(e)=>{setPassword(e.target.value)}}
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
            />
          </div>
          <button className="button primary-button">Create account</button>
        </form>
        <hr className="divider" />
        <p className="auth-prompt">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;