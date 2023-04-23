import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const SignUp = () => {

  const [input, setInput] = useState({
    email: "",
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
      await axios.post("https://elitmus-backend-9rw7.onrender.com/api/auth/register", input)
      navigate("/login")
    } catch (error) {
      setError(error.response.data)
    }
    
  }

  return (
    <>
   
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
      Sign Up !
    </div>
    <input
      required
      type="email"
      placeholder="E-mail"
      name="email"
      onChange={handleChange}
      style={{
        position: "absolute",
        width: "380px",
        height: "45px",
        left: "450px",
        top: "260px",
        border: "1px solid",
        borderRadius: "4px",
        boxSizing: "border-box",
        borderColor: "#FF842B",
        paddingLeft: "10px",
      }}
    />
     <input
      type="text"
      placeholder="Username"
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
        top: "315px",
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
        height: "65px",
        left: "450px",
        top: "390px",
        background: "#FF842B",
        borderRadius: "4px",
        color: "white",
        fontWeight: "600",
        fontSize: "16px",
        paddingLeft: "161px",
        paddingRight: "161px",
      }}
    >
      Sign Up
    </button>
    <h1
        style={{
          position: "absolute",
          width: "163px",
          height: "14px",
          left: "559px",
          top: "455px",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "16px",
          color: "#FF842B",
        }}
      >
        Already have an account ? <Link to={"/login"}style={{cursor: "pointer"}}><u>Login</u></Link>
      </h1>
    </div>
    </>
  )
}

export default SignUp