import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from './ProjectPage';
import About from './About';

const App = () => {
  return (
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
  );
}

export default App;
