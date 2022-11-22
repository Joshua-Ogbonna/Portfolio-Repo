import React from "react";

const projects = [
  {
    title: "Grow With Path",
    description: `Path provides Career and Growth Support Services for Africans
    currently pursuing and looking to forge a path in the African Tech
    Space.`,
    technologies: ["React", "TypeScript", "Redux", "CSS"],
    link: "https://www.growwithpath.co",
  },
  {
    title: "Jire Topup",
    description: `Buy instant Airtime/top-up & Data Bundle online home or abroad/from anywhere, at the comfort of your device without leaving your home or office at low price..`,
    technologies: [
      "React",
      "Redux",
      "CSS",
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "Stripe",
    ],
    link: "https://jiretopup.com/",
  },
  {
    title: "Platinum Events",
    description: `Organize and plan your event, manage and book vendors remotely for your events without stress`,
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "CSS",
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "Cloudinary",
      "Paystack",
    ],
    link: "https://www.platinumsevent.com/",
  },
  {
    title: "Bright Stars Schools",
    description: `School management platform that helps the above school manage their school activities seamlessly`,
    technologies: [
      "React",
      "Redux",
      "CSS",
      "Nodejs",
      "Expressjs",
      "MongoDB",
    ],
    link: "https://www.mcbrightstars.com/",
  },
];

const Hero = () => {
  return (
    <div className="hero__component">
      <span>Hello 👋</span>
      <h1>
        I'm <span>Joshua Ogbonna</span>, a frontend developer from NG.
      </h1>
      <p>
        I am a creative frontend engineer with strong passion for solving
        problems with code. I have over two years of professional experience
        building web application with amazing teams from different companies. I
        am an avid thinker with a taste for good music.
      </p>
      <div className="social__icons">
        <a
          href="https://github.com/Joshua-Ogbonna"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        |
        <a
          href="https://www.linkedin.com/in/devjayke"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>{" "}
        |
        <a href="https://twitter.com/nedujs" target="_blank" rel="noreferrer">
          <i className="bx bxl-twitter"></i>
        </a>
      </div>
      <div className="projects">
        <h3>Projects</h3>
        <div className="project__cards">
          {projects.map((project) => (
            <div className="project__card shadow" key={project.title}>
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech) => (
                  <div>#{tech}</div>
                ))}
              </div>
              <a target="_blank" rel="noreferrer" href={project.link}>
                Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
