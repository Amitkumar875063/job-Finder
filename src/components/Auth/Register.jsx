import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
const Register = () => {

  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");

  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  const otpgenerator = async (e)=>{
    e.preventDefault();
    try {
   
      const { data } = await axios.post(

        "http://localhost:4000/api/v1/user/sendotp",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);

    } catch (error) {

      toast.error(error.response.data.message);

    }
  }

  const handleRegister = async (e) => {

    e.preventDefault();

    try {
   
      const { data } = await axios.post(

        "http://localhost:4000/api/v1/user/signup",
        { name, phone, email, role, password ,otp},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);

      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
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

            <h3>Create a new account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Register As</label>
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
              <label>Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FaPencilAlt />

              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Phone Number</label>
              <div>
                <input
                  type="number"
                  placeholder="1234567890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FaPhoneFlip />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                
              </div>
            </div>
            <button type="submit" onClick={otpgenerator}>
              GenerateOTP
            </button>
            <div className="inputTag">
              <label>OTP</label>
              <div>
                <input
                  type="number"
                  placeholder=""
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" onClick={handleRegister}>
              Register
            </button>

            <Link to={"/login"}>Login Now</Link>
          </form>

        </div>

        <div className="banner">

          <img src="/register.jpg" alt="login" />
          
        </div>
      </section>
    </>
  );
};

export default Register;