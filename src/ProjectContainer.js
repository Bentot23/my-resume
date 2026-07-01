import React from "react";
import ProjectCard from "./ProjectCard";
import netflixImage from "./images/Netflix.png";
import amazonImage from "./images/Amazon.png";
// import wordpressImage from "./images/Wordpress.png";
import guessImage from "./images/GuessMyNumber.png";
import pigImage from "./images/PigGameTo100.png";

import "./styles/ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      id: 1,
      title: "Netflix Clone App",
      description:
        "A fully responsive Netflix clone built with React to display real-time movie and TV data using a third-party API. It demonstrates modern front-end development, clean component architecture, and polished UI design for a seamless user experience.",
      image: netflixImage,
      githubLink: "https://github.com/Bentot23/netflix-app-clone-project.git",
      appLink: "https://main.djjq2suxqxp7.amplifyapp.com/",
    },
    {
      id: 2,
      title: "Amazon Clone App",
      description:
        "A fully responsive Amazon clone built with React that features a functional shopping cart and secure user authentication. It highlights efficient state management, clean routing, and a dynamic e-commerce layout designed for a smooth user experience.",
      image: amazonImage,
      githubLink: "https://github.com/Bentot23/amazon-clone.git",
      appLink: "https://clone-273b4.web.app/",
    },
    // {
    //   id: 3,
    //   title: "Wordpress Sample Website",
    //   description: "An example of website hosted by wordpress",
    //   image: wordpressImage,
    //   githubLink: "",
    //   appLink: "http://vincentaldiano.org/",
    // },
    {
      id: 4,
      title: "Guess My Number",
      description:
        "An interactive web game built with vanilla JavaScript where players try to guess a randomly generated number within a set range. It features real-time feedback, score tracking, and dynamic DOM manipulation to deliver a fun and responsive user experience.",
      image: guessImage,
      githubLink: "https://github.com/Bentot23/guess-my-number.git",
      appLink: "https://main.debgl1bg80xgq.amplifyapp.com",
    },
    {
      id: 5,
      title: "Pig Game",
      description:
        "A fast-paced digital dice game built with vanilla JavaScript where two players race to reach 100 points by strategically banking their scores or risking it all on a single roll. The project highlights dynamic DOM manipulation, game logic implementation, and state management for a seamless multiplayer experience.",
      image: pigImage,
      githubLink: "https://github.com/Bentot23/pig-game.git",
      appLink: "https://main.d32m960qazp2kf.amplifyapp.com",
    },
  ];
  //   const renderProjects = projects.map((project) => {
  //     console.log(project.id)
  //     return (
  //         <div className='project_main_container'>
  //             <div className='projects_container'>
  //             <ProjectCard
  //                 key={project.id}
  //                 project={project}
  //             />
  //             </div>
  //         </div>
  //     )
  //   }

  //   )
  return (
    <div className="project_main_container">
      {projects.map((project) => {
        return (
          <div className="projects_container">
            <ProjectCard key={project.id} project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectContainer;
