import React from 'react'
import ProjectPage from './ProjectPage'

const Home = () => {
  return (
    <div>
        <div>
            <h4>Software Developer</h4>
            <h1>Vincent Aldiano</h1>
            {/* <div class="social">
                <a href="#"><i class='bx bxl-javascript' ></i></a>
                <a href="#"><i class='bx bxl-html5' ></i></a>
                <a href="#"><i class='bx bxl-react' ></i></a>
                <a href="#"><i class='bx bxl-css3' ></i></a>
                
            </div> */}
            <p>I have knowledge in HTML, CSS, JavaScript, Ruby and Rails!</p>
            {/* <div class="main_btn">
                <a href="#" class="btn">Download CV</a>
                <a href="#" class="btn two">Hire Me Now</a>

            </div> */}
        </div>
        <div>
            {/* <img src="IMG_1911.JPG" alt="" /> */}
            <img 
                src="IMG_1911.JPG" 
                alt="resume_image" 
            />
        </div>

        <ProjectPage />
    </div>
  )
}

export default Home