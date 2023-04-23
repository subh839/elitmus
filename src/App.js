
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSignUp from "./components/Admin/AdminSignUp";
import { useDispatch } from 'react-redux';
import Home from './Home.js'
import { getAdmin } from "./actions/admin";
import LoginPage from "./components/LoginPage";
import SignUp from './components/SignUp';
function App() {

  
  const dispatch = useDispatch();
  dispatch(getAdmin());


  return (

   <>
   <Router>
      
        <Routes>

        <Route path="/Home" exact element={<Home />} />
        <Route path="/Admin" exact element={<AdminSignUp />} />
        <Route exact path="/login" element={<LoginPage />}/>
        <Route exact path="/" element={<SignUp />}/>
        </Routes>
        </Router>
   </>
  );
}

export default App;