import React from "react";
import axios from "axios";
import { useState } from "react" 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {

  const [input, setInput] = useState({
    username: "",
    password: "",
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const {data} =  await axios.post("https://elitmus-backend-9rw7.onrender.com/api/auth/login", input);
      const {others: {_id}} = data;
      localStorage.setItem("userId", _id);
      navigate("/Home")
    } catch (error) {
      setError(error.response.data)
    }
    
  }

  return (
    <div className="container">
     
      <div
        style={{
          position: "absolute",
          width: "266px",
          height: "26px",
          top: "149px",
          left: "450px",
          fontWeight: "400",
          fontSize: "25px",
          display: "flex",
        }}
      >
        Welcome to OneClick !
      </div>
      <input
        required
        type="text"
        placeholder="Usename"
        name="username"
        onChange={handleChange}
        style={{
          position: "absolute",
          width: "380px",
          height: "45px",
          left: "450px",
          top: "203px",
          border: "1px solid",
          borderRadius: "4px",
          boxSizing: "border-box",
          borderColor: "#FF842B",
          paddingLeft: "10px",
        }}
      />
      <input
        required
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        style={{
          boxSizing: "border-box",
          position: "absolute",
          width: "380px",
          height: "45px",
          left: "450px",
          top: "263px",
          border: "1px solid",
          borderColor: "#FF842B",
          borderRadius: "4px",
          paddingLeft: "10px",
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          position: "absolute",
          width: "380px",
          height: "75px",
          left: "450px",
          top: "334px",
          background: "#FF842B",
          borderRadius: "4px",
          color: "white",
          fontWeight: "600",
          fontSize: "20px",
          paddingLeft: "161px",
          paddingRight: "161px",
        }}
      >
        Log In
      </button>
      <div
        style={{
          position: "absolute",
          width: "380px",
          height: "0px",
          left: "450px",
          top: "401px",
          border: "1px solid #FF842B",
        }}
      ></div>
      <button
        style={{
          boxSizing: "border-box",
          position: "absolute",
          width: "180px",
          height: "45px",
          left: "450px",
          top: "423px",
          border: "1px solid #FF842B",
          borderRadius: "2px",
          color: "#FF842B",
          fontWeight: "500",
          fontSize: "20px",
          fontStyle: "normal",
          lineHeight: "23px",
        }}
      >
        Facebook
      </button>
      <button
        style={{
          boxSizing: "border-box",
          position: "absolute",
          width: "180px",
          height: "45px",
          left: "650px",
          top: "423px",
          border: "1px solid #FF842B",
          borderRadius: "2px",
          color: "#FF842B",
          fontWeight: "500",
          fontSize: "20px",
          fontStyle: "normal",
          lineHeight: "23px",
        }}
      >
        Google
      </button>
      <p
        style={{
          position: "absolute",
          width: "355px",
          height: "14px",
          left: "463px",
          top: "498px",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "14px",
          color: "#FF842B",
        }}
      >
        By logging in, you agree to our company’s terms and conditions.
      </p>
      <h1
        style={{
          position: "absolute",
          width: "163px",
          height: "14px",
          left: "559px",
          top: "539px",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "16px",
          color: "#FF842B",
        }}
      >
        Forgot password ? <u style={{cursor: "pointer"}}>Reset</u>
      </h1>
      <h1
        style={{
          position: "absolute",
          width: "222px",
          height: "14px",
          left: "529px",
          top: "583px",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "15px",
          lineHeight: "18px",
          color: "#FF842B",
        }}
      >
        Don’t have an account? <Link to={"/signup"} style={{cursor: "pointer"}}><u>Signup</u></Link>
      </h1>
      
    </div>
    
  );
};

export default LoginPage;