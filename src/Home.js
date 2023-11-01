import React from 'react'
import image from "./images/MyPic.png"
import ProjectContainer from './ProjectContainer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import "./styles/Home.css"
import Footer from './Footer';

const Home = () => {
    
  return (
    <div className='page_content'>
        <div className='home_container'>
            <div className='main_info'>
                <div className='left_side'>
                    <div className='homepage_title'>
                        <h1>Vincent Aldiano</h1>
                        <h2>Software Developer</h2>
                    </div>
                    <div className='homepage_sub'>
                        <p>Hi! Hire me and you won't regret it! I'm a hardworking person and willing to learn new stuff!</p>
                    </div>
                </div>

                <div className='right_side'>
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
            <div className="social">
                <div className='social_link'><Link to="https://github.com/Bentot23"><GitHubIcon/></Link></div>
                <div className='social_link'><Link to="https://linkedin.com/in/vincent-aldiano-789871171"><LinkedInIcon/></Link></div>
            </div>
            <div className='home_projects'>
                <ProjectContainer />
            </div>
            <div className="page_footer">
                <Footer />
            </div>
            
        </div>
    </div>
  )
}

export default Home