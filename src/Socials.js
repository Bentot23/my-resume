import React from "react";
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import "./styles/Socials.css";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Socials = () => {
	return (
		<div className="socials">
			
			<div className="social">
                <div className='social_link'><Link to="https://github.com/Bentot23"><GitHubIcon/></Link></div>
                <div className="social_text">Follow on GitHub</div>
			</div>

			<div className="social">
                <div className='social_link'><Link to="https://linkedin.com/in/vincent-aldiano-789871171"><LinkedInIcon/></Link></div>
                <div className="social_text">Follow on LinkedIn</div>
			</div>
			<div className="email">
				<div className="email_wrapper">
				
                    <div className="social_link"><Link to="vincentaldiano@gmail.com">
                    <EmailSharpIcon /></Link>
                    </div>

                    <div className="social_text">vincentaldiano@gmail.com</div>
				</div>
			</div>  
		</div>
	);
};

export default Socials;
