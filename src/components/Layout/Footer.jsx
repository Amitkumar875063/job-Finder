import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Context } from "../../main";
import React, { useContext } from "react";

const Footer = () => {
  const { isAuthorized } = useContext(Context);

  return (

    <footer className={isAuthorized ? "footerShow" : "footerHide"}>

      <div>&copy; All Rights Reserved By Taciturn.</div>

      <div>
        <Link to={"https://www.linkedin.com/in/shivamraj02/"} target="_blank">
          <FaLinkedin />
        </Link>
        
        <Link to={"https://www.instagram.com/sraj_24/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>

    </footer>

  );
};

export default Footer;