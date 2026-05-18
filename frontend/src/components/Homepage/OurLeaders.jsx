import React from "react";
import "./OurLeaders.css";
import jatin from "../../assets/images/jatinoffice.jpeg";
import dhaval from "../../assets/images/dhavaloffice.jpeg";
import vijay from "../../assets/images/Vijayoffice.jpeg";
import swapnil from "../../assets/images/swapniloffice.jpeg";
import nikhil from "../../assets/images/nikhill.jpeg";
import jayraj from "../../assets/images/jayrajj.jpeg";
import yash from "../../assets/images/Yash.webp";
import riddhi from "../../assets/images/Riddhi.webp";

const leadersMain = [
  {
    name: "Riddhi Rana",
    role: "Founder",
    img: riddhi,
  },
  {
    name: "Yash Shah",
    role: "Co-Founder",
    img: yash,
  },
];

const teamMembers = [
  {
    name: "Jatin Patel",
    role: "Flutter Developer",
    img: jatin,
  },
  {
    name: "Dhaval Valvi",
    role: "Frontend Developer",
    img: dhaval,
  },
  {
    name: "Vijay Sharma",
    role: "Full-Stack Developer",
    img: vijay,
  },
  {
    name: "Swapnil Solanki",
    role: "UI/UX Designer & Graphic Designer",
    img: swapnil,
  },
];

const interns = [
  {
    name: "Jayraj Ravalji",
    role: "React Developer",
    img: jayraj,
  },
  {
    name: "Nikhil Patel",
    role: "Backend Developer",
    img: nikhil,
  },
];

const OurLeaders = () => {
  return (
    <section className="leaders-section">
      <div className="leaders-container">
        <div className="badgee">Our Leaders</div>

        <p className="leaders-desc">
          Let’s introduce the top-notch people of our organization. They lead a
          team of passionate developers, designers, and strategists with
          dedication and analysis.
        </p>
        <div className="leaders-row main-row">
          {leadersMain.map((member, index) => (
            <div className="leader-card main-card" key={index}>
              <div className="avatar-wrapper">
                <img src={member.img} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        <div className="leaders-row team-row">
          {teamMembers.map((member, index) => (
            <div className="leader-card" key={index}>
              <div className="avatar-wrapper">
                <img src={member.img} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        <div className="interns-row team-row">
          {interns.map((member, index) => (
            <div className="leader-card" key={index}>
              <div className="avatar-wrapper">
                <img src={member.img} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeaders;
