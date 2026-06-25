import React from "react";
import image from "./images/Pic.jpg";
import ProjectContainer from "./ProjectContainer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import Footer from "./Footer";
// import ProjectPage from "./ProjectPage";
// import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="page_content">
        <div className="content_wrapper">
          <div className="home_container">
            <div className="main_info">
              <div className="left_side">
                <div className="title homepage_title">Vincent Aldiano</div>
                <div className="title homepage_subtitle">
                  Software Developer
                  <br />
                  <div className="subtitle_sub">
                    Building clean, functional web experiences from Texas
                  </div>
                </div>
                <div className="subtitle homepage_sub">
                  Hi, I’m Vincent. I am a self-driven developer eager to learn,
                  grow, and build impactful digital experiences. I thrive in
                  dynamic environments and am dedicated to delivering clean,
                  efficient solutions that bring the best outcomes for clients.
                </div>
              </div>

              <div className="right_side">
                <div className="image_container">
                  <div className="image_wrapper">
                    <img
                      src={image}
                      alt="MY_PROFILE"
                      className="homepage_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="social">
            <div className="social_link">
              <Link to="https://github.com/Bentot23">
                <GitHubIcon />
              </Link>
            </div>
            <div className="social_link">
              <Link to="https://linkedin.com/in/vincent-aldiano-789871171">
                <LinkedInIcon />
              </Link>
            </div>
          </div>
          <hr />
          <div className="home_projects">
            <ProjectContainer />
            {/* <ProjectPage /> */}
          </div>

          <div className="page_footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
