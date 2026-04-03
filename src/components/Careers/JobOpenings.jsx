import React from "react";
import "./JobOpenings.css";

const JobOpenings = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full Time",
      location: "India",
      skills: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Backend Developer",
      type: "Full Time",
      location: "India",
      skills: ["Node.js", "Express", "MongoDB", "REST API"],
    },
    {
      title: "Full Stack Developer",
      type: "Full Time",
      location: "India",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "API Integration",
        "Express",
        "Android",
      ],
    },
    {
      title: "UI/UX Designer",
      type: "Part Time",
      location: "Remote",
      skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
    },
    {
      title: "Digital Marketing Executive",
      type: "Full Time",
      location: "India",
      skills: ["SEO", "Social Media", "Google Ads", "Content Marketing"],
    },
    {
      title: "QA Tester",
      type: "Full Time",
      location: "India",
      skills: [
        "Manual Testing",
        "Automation Testing",
        "Selenium",
        "Bug Tracking",
      ],
    },
    {
      title: "Python Developer",
      type: "Full Time",
      location: "India",
      skills: ["Python", "Django", "Flask", "SQL"],
    },
    {
      title: "Laravel Developer",
      type: "Full Time",
      location: "India",
      skills: ["PHP", "Laravel", "MySQL", "Blade"],
    },
    {
      title: "Social Media Manager",
      type: "Full Time",
      location: "India",
      skills: [
        "Content Creation",
        "Instagram",
        "Analytics",
        "Campaign Strategy",
      ],
    },
    {
      title: "Graphic Designer",
      type: "Full Time",
      location: "India",
      skills: ["Photoshop", "Illustrator", "Figma", "Brand Design"],
    },
    {
      title: "Application Developer",
      type: "Full Time",
      location: "India",
      skills: [
        "Flutter",
        "React Native",
        "Java",
        "Kotlin",
        "Android Studio",
        "API Integration",
      ],
    },
  ];

  return (
    <section className="jobs" id="jobs">
      <div className="container">
        <h2 className="section-title">
          Join Our <span>Growing Team</span>
        </h2>

        <p className="section-subtitle">
          Explore exciting career opportunities and build your future with us.
        </p>

        <div className="jobs-list">
          {jobs.map((job, i) => (
            <div key={i} className="job-card">
              <div className="job-left">
                <h3>{job.title}</h3>

                <p className="job-meta">
                  {job.type} • {job.location}
                </p>

                <div className="skills">
                  {job.skills.map((skill, index) => (
                    <span key={index}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="job-right">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@exoticinfotech.com&su=Project%20Discussion&body=Hi%2C%20I%20would%20like%20to%20discuss%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-btn"
                >
                  Apply Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
