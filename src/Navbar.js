import React from 'react'
// import Breadcrumbs from '@mui/material/Breadcrumbs'
// import Link from '@mui/material/Link',
import { Link } from 'react-router-dom'
// import Chip from '@mui/material/Chip'
// import Stack from '@mui/material/Stack'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';


import './styles/Navbar.css'

const Navbar = (props) => {
    const { active } = props;
    // const [show, handleShow] = useState(false);

//   useEffect( () => {
//     window.addEventListener("scroll", () => {
//         if(window.scrollY > 10) {
//             handleShow(true);
//         } else handleShow(false)
//     });
//     // return () => {
//     //     window.removeEventListener("scroll");
//     // };
//   }, []);
  return (


<>
        <div className="nav-container">
            <nav className="navbar">
                <div className="nav-background">
                    <ul className="nav-list">
                        <li
                            className={
                                active === "home"
                                    ? "nav-item active"
                                    : "nav-item"
                            }
                        >
                            <Link to="/"><HomeSharpIcon/></Link>
                        </li>
                        <li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
                        <li
                            className={
                                active === "projects"
                                    ? "nav-item active"
                                    : "nav-item"
                            }
                        >
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li
                            className={
                                active === "contactpage"
                                    ? "nav-item active"
                                    : "nav-item"
                            }
                        >
                            <Link to="/contactpage">
                                {/* <ContactPageSharpIcon/> */}
                                Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </>

    // <div className='nav'>
    //     <h4 className='nav_title'>Software Developer</h4>
    //     {/* <Link underline="hover" color="inherit" to="/about">
    //       About
    //     </Link> */}
    //     <div className='nav_button'>
    //         <Link   
    //         underline="hover"
    //         color="inherit"
    //         to="/projects">
    //         <Chip label='Projects' />
    //         </Link>
    //         <Link
    //         underline="hover"
    //         color="text.primary"
    //         //   href="/material-ui/react-breadcrumbs/"
    //         to="/"
    //         aria-current="page">
    //         <Chip label='Home' />

    //         </Link>
    //     </div>
    // </div>
    
  )
}

export default Navbar