// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from './ProjectPage';
import About from './About';


// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });



function App() {
  return (
    // <ThemeProvider 
    //   theme={darkTheme}
    //   >
    //   <CssBaseline />
      <Router>
        <Navbar active="home"/>
        <Routes>
          <Route path='/projects'
            element={ <ProjectPage /> } />
          <Route path='/about'
            element={ <About /> } />
          <Route path='/'
            element={ <Home /> } /> 
        </Routes>
      </Router>
    // </ThemeProvider>
    
  );
}

export default App;
