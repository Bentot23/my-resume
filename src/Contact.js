import React, { useEffect } from "react";
import "./styles/Contact.css";
import Socials from "./Socials";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="page-content">
        <Navbar active="contactpage" />
        <div className="content_wrapper">
          <div className="contact_container">
            <div className="title contact_title">
              Let's Get in Touch: Ways to Connect with Me
            </div>

            <div className="subtitle contact_sub">
              Thanks for stopping by! Whether you have a question about my
              projects, want to talk code, or just want to say hello, I’d love
              to hear from you. You can reach me directly at &nbsp;{" "}
              <Link to="https://vincentaldiano@gmail.com">
                vincentaldiano@gmail.com
              </Link>
              . Alternatively, you can also contact me through phone{" "}
              <Link to="tel:+12104128551">
                {" "}
                <LocalPhoneSharpIcon />
              </Link>{" "}
              +1(210) 412-8551. Finally, if you prefer to connect on social
              media, you can find me on{" "}
              <Link to="https://linkedin.com/in/vincent-aldiano-789871171">
                <LinkedInIcon />
              </Link>
              . Thanks again for your interest, and I look forward to hearing
              from you!
            </div>
          </div>

          <div className="socials_container">
            <div className="contact_socials">
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

export default Contact;
