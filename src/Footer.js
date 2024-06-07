import React from "react";
import { Link } from "react-router-dom";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

import "./styles/Footer.css";


const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer_links">
					<ul className="footer_nav_link_list">
						<li className="footer_nav_link_item">
							<Link to="/"><HomeSharpIcon/></Link>
						</li>
						<li className="footer_nav_link_item">
							<Link to="/about">About</Link>
						</li>
						<li className="footer_nav_link_item">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="footer_nav_link_item">
							<Link to="/contactpage">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer_credits">
					<div className="footer_credits_text">
						© 2024 VincentA.dev. All Rights Reserved.
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;