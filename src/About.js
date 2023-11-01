import React, { useEffect } from "react";
// import Footer from "../components/common/footer";
import Navbar from "./Navbar";
import "./styles/About.css";
import image from "./images/MyPic.JPG";
import Socials from "./Socials";



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
								<div className="about_title">
									<h1>I'm Vincent A. I live in Texas where I start to learn and love coding!</h1>
								</div>

								<div className="about_sub">
									<p>I studied Software Engineering in a bootcamp in Flatiron School. I learned HTML, CSS, Vanilla JavaScript, ReactJS, Ruby, Ruby on Rails, SQL, Postgresql and different ui frameworks. Unfortunately, I was not able to finish the program in time. I continue to self learn the languages I learned during my bootcamp and try to make more projects through it! I'm always excited to learn new languages, like Python and Java which I will be learning soon. </p>
								</div>
							</div>

							<div className="about_left_side">
								<div className="about_image_container">
									<div className="about_image_wrapper">
										<img
											src={image}
											alt="about"
											className="about_image"
										/>
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
					{/* <div className="page_footer">
						<Footer />
					</div> */}
				</div>
			</div>
		</>
	);
};

export default About;