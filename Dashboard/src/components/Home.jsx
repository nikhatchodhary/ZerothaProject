import React from 'react';
import Dashboard from './Dashboard';
import TopBar from './TopBar';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



function Home(){
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  // const FRONTEND_URL =
  // import.meta.env.MODE === "development"
  //   ? "http://localhost:5173"
  //   : "https://zerotha-0pnu.onrender.com";

 useEffect(() => {
  const verifyCookie = async () => {
    try {
      const { data } = await axios.post(
        "https://zerotha-backend-1le6.onrender.com/verify",
        {},
        { withCredentials: true }
      );
      if (!data.status) {
        removeCookie("token", { path: "/" });
      window.location.replace("https://zerotha-0pnu.onrender.com/login");
        return;
      }
      setUsername(data.user);
    } catch (err) {
      console.error("Verification failed:", err);
     window.location.replace("https://zerotha-0pnu.onrender.com/login");
    }
  };

  verifyCookie();
}, []);


  const Logout = () => {
  removeCookie("token",{path:"/"});
  toast.success("You've been logged out successfully!", {
    position: "top-right",
    autoClose: 1500,
  });
  setTimeout(() => {
    window.location.href="https://zerotha-0pnu.onrender.com/signup";
  }, 1500);
};
    
    return ( 
        <>
        <TopBar username={username} Logout={Logout}/>
        <Dashboard username={username}/>
        <ToastContainer/>
        </>
     );
}

export default Home;