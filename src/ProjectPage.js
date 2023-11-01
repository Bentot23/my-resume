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
					{/* <div className="projects_logo_container">
						<div className="projects_logo">
							<Logo width={46} />
						</div>
					</div> */}
					<div className="projects_container">
						<div className="projects_title">
							<h1>These are some Projects I can do.</h1>
						</div>

						<div className="projects_sub">
							<p>I've worked some projects and coding exercises during my bootcamp
							and I'm proud of the progress I've made. Many of
							these projects are open-source and available for
							others to explore and contribute to. If you're
							interested in any of the projects I've worked on,
							please feel free to check out the code and suggest
							any improvements or enhancements you might have in
							mind. Collaborating with others is a great way to
							learn and grow, and I'm always open to new ideas and
							feedback.</p>
						</div>
                    </div>
                    <div>
						<div className="projects_list">
							<ProjectContainer />
						</div>
                        <div className="page_footer">
						    <Footer />
					    </div>
					</div>
					
				</div>
			</div>
		</>
	);
};

export default ProjectPage;