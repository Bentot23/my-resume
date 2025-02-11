import React from "react";
import ProjectCard from "./ProjectCard";
import netflixImage from "./images/Netflix.png";
import amazonImage from "./images/Amazon.png";
import wordpressImage from "./images/Wordpress.png";

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
