import React from 'react'
import Link from '@mui/material/Link';
import './styles/ProjectCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({project}) => {
    // console.log(project)
  const {image, title, description, githubLink, appLink  } = project
//   const [isClick, setIsClick] = useState(false);

//   const handleClick = () => setIsClick((isClick) => !isClick)

  
  return (

    <>
        <div className="project">
            <div className="project_container">
                <div className="project_image">
                    <img src={image} alt="" />
                </div>
                <div className="project_title">{title}</div>
                <div className="project_description">{description}</div>
                <div className="project_link">
                    <div className="project_link_icon">
                        <Link href={githubLink}><FontAwesomeIcon icon={faLink} />Code</Link>
                    </div>
                        <Link href={appLink}><div className="project_link_text">View Project</div></Link>
                </div>
            </div>
        </div>
	</>
  )
}

export default ProjectCard