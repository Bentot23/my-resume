import React, { useEffect } from "react";
// import Footer from "../components/common/footer";
import Navbar from "./Navbar";
import "./styles/About.css";
import image from "./images/MyPic.png";
import Socials from "./Socials";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <>
      <div className="page_content">
        <Navbar active="about" />
        <div className="content_wrapper">
          {/* <div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div> */}

          <div className="about_container">
            <div className="about_main">
              <div className="about_right_side">
                <div className="title about_title">
                  I'm Vincent A. I live in Texas where I started to learn and
                  love coding!
                </div>

                <div className="subtitle about_sub">
                  I studied software development and learned coding languages
                  such as HTML, CSS, Vanilla JavaScript, ReactJS, Ruby on Rails,
                  SQL, and different UI CSS frameworks. I continue to hone my
                  skills through self education, creating new projects, and
                  learning new languages. I am learning Python, which I am very
                  excited about right now. I am also learning Wordpess to
                  develop my web development skills.
                </div>
              </div>

              <div className="about_left_side">
                <div className="about_image_container">
                  <div className="about_image_wrapper">
                    <img src={image} alt="" className="about_image" />
                  </div>
                </div>

                <div className="about_socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about_socials_mobile">
              <Socials />
            </div>
          </div>
          <div className="page_footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
