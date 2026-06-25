import React, { useEffect } from "react";
import "./styles/ProjectPage.css";
import ProjectContainer from "./ProjectContainer";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="page_content">
        <Navbar active="projects" />
        <div className="content_wrapper">
          <div className="projects_container">
            <div className=" title projects_title">
              Featured Work & Projects
            </div>

            <div className="subtitle projects_sub">
              Welcome to my project space! Here you’ll find a collection of web
              applications, coding exercises, and experiments I’ve built
              throughout my journey in software development. Each project
              represents a milestone in my learning, a solved problem, or a new
              technology mastered. Many of these projects are open-source and
              hosted publicly. I believe that the best code is built together,
              so I warmly invite you to explore the repositories, test the live
              demos, and check out how they work under the hood.
            </div>
          </div>
          {/* <hr /> */}
          {/* <div className="project_main_container"> */}
          <div className="projects_list">
            <ProjectContainer />
          </div>
          {/* </div> */}
          <div className="page_footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
