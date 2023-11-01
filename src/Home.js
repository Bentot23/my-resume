import React from 'react'
import image from "./images/MyPic.png"
import ProjectPage from './ProjectPage';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import "./styles/Home.css"

const Home = () => {

  return (
    <div className='home_container'>
        <div className='main_info'>
            <div className='left_side'>
                <div className='homepage_title'>
                    <h1>Vincent Aldiano</h1>
                    <h2>Software Developer</h2>
                </div>
                <div className='homepage_sub'>
                    <p>I've studied coding through bootcamp and unfortunately some things came up and was not able to finish the program on time. I still continue to learn about software development and continue to learn some languages. ReactJS, JavaScript, HTML, CSS, Ruby on Rails are some of those that I continue learning. There are more languages that are to learn in software development and i'm still striking and very eager to learn those languages. Feel free to contact me so you will know how dedicated I am in this Software industry!</p>
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
            <ProjectPage />
        </div>
        
    </div>
  )
}

export default Home