
import { MdOutlineMailOutline } from "react-icons/md";
import {  useParams } from "react-router-dom";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";




const ForgotPassword = (props) => {

    const [otp,setotp] = useState("");
    const [password, setPassword] = useState("");
    const { email } = useParams();
    console.log(email);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
                console.log(otp);
            const { data } = await axios.post(      
                
              "http://localhost:4000/api/v1/user/forgotPassword",
              { otp,password,email},
              {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              }
            );
            toast.success(data.message);
            setPassword("");
            setotp("");
      
          } catch (error) {
      
            toast.error(error.response.data.message);
    
          }

    
    }
  return (  
    <>
    <section className="authPage">
        <div className="container">
          <div className="header">
            <img src="/career.png" alt="logo" />
            <h3>Reset Your Password</h3>
          </div>
          <form>
           
            <div className="inputTag">
              <label>OTP</label>
              <div>
                <input
                  type="text"
                  placeholder=""
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>

            <div className="inputTag">
              
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Enter Your New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>

            </div>
            <button type="submit" onClick={handleSubmit}>
              Change Password
            </button>
            <Link to={"/login"}>Login Again</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/login.png" alt="login" />
        </div>
      </section>
    </>
  )

}

export default ForgotPassword