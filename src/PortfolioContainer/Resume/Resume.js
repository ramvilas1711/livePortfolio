import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import education from "../../assets/Resume/education.svg";
import interests from "../../assets/Resume/interests.svg";
import programming from "../../assets/Resume/programming-skills.svg";
import projects from "../../assets/Resume/projects.svg";
import work from "../../assets/Resume/work-history.svg";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: education },
    { label: "Work History", logoSrc: work },
    { label: "Programming Skills", logoSrc: programming },
    { label: "Projects", logoSrc: projects },
    { label: "Interests", logoSrc: interests },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C++", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 50 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Hooks", ratingPercentage: 50 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Spring Boot", ratingPercentage: 80 },
    { skill: "Microservices", ratingPercentage: 80 },
    { skill: "Linux", ratingPercentage: 80 },
    { skill: "Design Pattern", ratingPercentage: 80 },
    { skill: "Android Development", ratingPercentage: 30 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Javascript",
    },
    {
      title: "E-commerce Website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Designed and developed a responsive e-commerce platform, ensuring an intuitive user experience and secure transactions.",
      subHeading: "Technologies Used:  React.js, Javascript, HTML, CSS.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"RajKumar Goel Engineering College Ghaziabad (AKTU)"}
        subHeading={"B.Tech"}
        fromDate={"2017"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"Intermediate"}
        subHeading={"M.J.R.P Public School Ghazipur"}
        fromDate={"2016"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Gauri Shankar Public School Ghazipur"}
        fromDate={"2014"}
        toDate={"2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"HCL Technology"}
          subHeading={"Software Engineer"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            As a passionate Software Engineer with 3 years of experience,  Currently, at HCL Tech, I have had the opportunity to work on cutting-edge projects that leverage my expertise in full-stack development, API integration, and performance optimization.

          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Implemented Essential APIs: Developed critical camera APIs, including the Shooting Function, Playback Menu, and Image Quality Adjustment, significantly improving functionality and user satisfaction.

          </span>
          <br />
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Developing full-stack applications using Core Java, Spring Boot's
            REST framework, and React.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -Designed and deployed Spring Boot microservices for enhanced
            maintainability and scalability.
          </span>
          <br />
        </div>
      </div>
      {/* <div className="experience-container">
        <ResumeHeading
          heading={"Ajath InfoTech PVT LMT"}
          subHeading={"Android Developer(Internship)"}
          fromDate={"July"}
          toDate={"September"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Contributed to Apustrov App development (similar to Instagram) with
            layouts and functionalities.
          </span>
        </div>
      </div> */}
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Playing Chess"
        description="Apart from being a tech enthusiast and a Developer, i also love to play chess."
      />
      <ResumeHeading
        heading="Shooting Gaming"
        description="I like to play PC shooting game."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className="bullet-logo" src={bullet.logoSrc} alt="B" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
