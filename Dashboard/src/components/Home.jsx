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

  const FRONTEND_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "https://zerotha-0pnu.onrender.com";

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
          window.location.href = FRONTEND_URL + "/login";
      }
      const { data } = await axios.post(
        "https://zerotha-backend-1le6.onrender.com/verify",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      if(!status){
         removeCookie("token"),    
         window.location.href = FRONTEND_URL + "/login";
         return;
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);


  const Logout = () => {
  removeCookie("token",{path:"/"});
  toast.success("You've been logged out successfully!", {
    position: "top-right",
    autoClose: 1500,
  });
  setTimeout(() => {
    window.location.href = FRONTEND_URL + "/login";
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