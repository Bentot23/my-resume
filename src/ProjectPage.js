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
              These are some Projects I can do.
            </div>

            <div className="subtitle projects_sub">
              I've completed some projects and coding exercises during my
              journey in learning software development and I'm proud of the
              progress I've made. Many of these projects are open-source and
              available for others to explore and contribute to. If you're
              interested in any of the projects I've worked on, please feel free
              to check out the code and suggest any improvements or enhancements
              you might have in mind. Collaborating with others is a great way
              to learn and grow, and I'm always open to new ideas and feedback.
            </div>
          </div>
          <hr />

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
