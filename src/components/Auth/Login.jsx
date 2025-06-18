import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import ForgotPassword from "./ForgotPassword";



const Login = () => {

  const navigateTo = useNavigate();

  const [email, setEmail] = useState("");

  const [otp, setotp] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);


  const handleForgot = async (e)=>{
      e.preventDefault();
      try {
   
        const { data } = await axios.post(
  
          "http://localhost:4000/api/v1/user/sendotp",
          { email},
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        toast.success(data.message);

        navigateTo(
          `/forgot/${email}`
        );
  
      } catch (error) {
  
        toast.error(error.response.data.message);

      }
    
  }

  const handleLogin = async (e) => {

    e.preventDefault();
    try {
      console.log("hello");
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("hello");
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }

  };



  if(isAuthorized){

    return <Navigate to={'/'}/>

  }

  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src="/career.png" alt="logo" />
            <h3>Login to your account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                  <option value="Recruiter">Recruiter</option>
                  <option value="Applicant">Applicant</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="zk@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <button type="submit" onClick={handleForgot}>
              Forgot Password
            </button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/login.png" alt="login" />
        </div>
      </section>
    </>
  );
};

export default Login;