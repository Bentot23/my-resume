import React from 'react'

const Social = () => {
  return (
    <div className="share">
        <p>Check out my:</p>
        <div className="social">
            <div className='link'><Link to="https://github.com/Bentot23"><GitHubIcon/></Link></div>
            <div className='link'><Link to="https://linkedin.com/in/vincent-aldiano-789871171"><LinkedInIcon/></Link></div>
            {/* <a href="https://github.com/Bentot23"><i class='bx bxl-github' undefined ></i></a>
            <a href="https://linkedin.com/in/vincent-aldiano-789871171"><i class='bx bxl-linkedin' ></i></a>
            <a href="#"><i class='bx bxl-messenger' ></i></a> */}
        </div>
    </div>
  )
}

export default Social