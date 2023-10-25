import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';

// function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
// }
function handleClick(e) {
    e.preventDefault()
    console.log('You clicked Navbar button')
}

const Navbar = () => {
  return (

    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/about">
          About
        </Link>
        <Link   
          underline="hover"
          color="inherit"
          to="/projects">
          Projects
        </Link>
        <Link
          underline="hover"
          color="text.primary"
        //   href="/material-ui/react-breadcrumbs/"
          to="/"
          aria-current="page">
          Home
        </Link>
      </Breadcrumbs>
    </div>
    // <div>
    //     <h1>ViNcEnT</h1>        
    //     <div>
    //         <li>Home</li>
    //         <li>About</li>
    //         <li>Projects</li>
    //     </div>
    //     {/* <div class="menu_btn">
    //         <span>INTRO</span>
    //         <div class="bx bx-menu" id="menu-icon"></div>
    //     </div> */}
    // </div>
  )
}

export default Navbar