import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const Demo = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How CareerHunt Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                First Step : Create Your Account On CareerHunt To end your JobQuest.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Second Step : Find A Job Ideal For You.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Third Step : Apply For The Selected Post.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Demo;