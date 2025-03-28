import React from "react";
import ProjectCard from "./ProjectCard";
import netflixImage from "./images/Netflix.png";
import amazonImage from "./images/Amazon.png";
import wordpressImage from "./images/Wordpress.png";
import guessImage from "./images/GuessMyNumber.png";
import pigGameImage from "./images/PigGame.png";

import "./styles/ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      id: 1,
      title: "Netflix Clone App",
      description:
        "A netflix app clone with similar functionalities of the real app using ReactJS!",
      image: netflixImage,
      githubLink: "https://github.com/Bentot23/netflix-app-clone-project.git",
      appLink: "https://main.djjq2suxqxp7.amplifyapp.com/",
    },
    {
      id: 2,
      title: "Amazon Clone App",
      description:
        "An amazon clone app with similar functionalities of the app using ReactJS!",
      image: amazonImage,
      githubLink: "https://github.com/Bentot23/amazon-clone.git",
      appLink: "https://clone-273b4.web.app/",
    },
    {
      id: 3,
      title: "Wordpress Sample Website",
      description: "An example of website hosted by wordpress",
      image: wordpressImage,
      githubLink: "",
      appLink: "http://vincentaldiano.org/",
    },
    {
      id: 4,
      title: "Guess My Number",
      description: "A simple game using JavaScript!",
      image: guessImage,
      githubLink: "https://github.com/Bentot23/guess-my-number.git",
      appLink: "https://main.debgl1bg80xgq.amplifyapp.com",
    },
    {
      id: 5,
      title: "Pig Game",
      description: "A simple game using JavaScript!",
      image: pigGameImage,
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
