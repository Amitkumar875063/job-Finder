import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,87,421",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "78023",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "3,32,210",
      subTitle: "Applicants",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,12,031",
      subTitle: "Recruiters",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div>
            <h1>DISCOVER YOUR DREAM CAREER</h1>
            <div className="title">
            <p>
            Welcome to CareerHunt, your ultimate destination for finding the perfect job that aligns with your skills, passions, and career aspirations. Whether you're a recent graduate embarking on your professional journey, a seasoned professional seeking new challenges, or someone looking to make a career change, CareerHunt offers a comprehensive suite of tools and resources to help you navigate the job market. Our platform connects you with top employers, provides personalized job recommendations, and offers expert advice on resume building, interview preparation, and career development. Join us at CareerHunt and take the first step towards discovering your dream career today!
            </p>
            </div>
            
          </div>
          {/* <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div> */}
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;