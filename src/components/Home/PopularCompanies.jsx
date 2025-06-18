import React from "react";
import { FaMicrosoft, FaApple, FaAmazon, FaGoogle, FaFacebook } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Banglore",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Amazon",
      location: "Mumbai",
      openPositions: 5,
      icon: <FaAmazon />,
    },
    {
      id: 3,
      title: "Facebook",
      location: "Banglore",
      openPositions: 10,
      icon: <FaFacebook />,
    },
    {
        id: 4,
        title: "Apple",
        location: "Gurugram",
        openPositions: 20,
        icon: <FaApple />,
      },
      {
        id: 5,
        title: "Google",
        location: "Hyderabad",
        openPositions: 15,
        icon: <FaGoogle />,
      }

  ];
  return (
    <div className="companies">
      <div className="container">

        <h3>TOP COMPANIES</h3>
        
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;