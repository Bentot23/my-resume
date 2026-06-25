import React, { useEffect } from "react";
// import Footer from "../components/common/footer";
import Navbar from "./Navbar";
import "./styles/About.css";
// import image from "./images/Pic.jpg";
import Socials from "./Socials";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <>
      <div className="page-content">
        <Navbar active="about" />
        <div className="content_wrapper">
          <div className="about_container">
            <div className="title about_title">
              Crafting Clean Code. Driven by Growth.
            </div>

            <div className="subtitle about_sub">
              Hi, I’m Vincent. Based in Texas, my journey into tech began with a
              spark of curiosity that quickly evolved into a true passion for
              software development. I love the process of taking a blank text
              editor and turning it into a functional, user-centric web
              experience. I have built a strong foundation across the stack,
              working with HTML, CSS, Vanilla JavaScript, ReactJS, Ruby on
              Rails, SQL, and various modern UI frameworks. Because the web is
              always evolving, I make it a priority to never stop growing. I am
              constantly sharpening my skills through self-education, building
              independent projects, and mastering new technologies. Right now, I
              am channeling my excitement into earning formal Full-Stack
              Development certifications and expanding my capabilities into
              WordPress development. Whether building from scratch or leveraging
              a CMS, I am driven to deliver versatile, high-quality solutions
              and look forward to bringing this dedication to a collaborative,
              dynamic team.
            </div>
          </div>

          <div className="socials_container">
            <div className="about_socials">
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
