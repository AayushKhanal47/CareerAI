import React, { useState } from "react";
import "../auth.form.scss";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const {loading, handleLogin} = useAuth()

  const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin({email,password})
  };
if(loading){
  return(<main><h1>Loading.....</h1></main>)
}
  return (
    <main>
      <div className="form-container">
        <h1>Welcome back</h1>
        <p className="form-subtitle">Sign in to your account</p>
        <form onSubmit={handleSubmit}>
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
              placeholder="Enter password"
            />
          </div>
          <a href="#" className="forgot-link">Forgot password?</a>
          <button className="button primary-button">Sign in</button>
        </form>
        <hr className="divider" />
        <p className="auth-prompt">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;