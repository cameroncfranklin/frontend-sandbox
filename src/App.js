import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './Pages/HomePage'; // Need to import our component before we can use it
import AboutPage from './Pages/AboutPage';
import ProjectsListPage from './Pages/ProjectsListPage';
import ProjectsPage from './Pages/ProjectsPage';
import EducationPage from './Pages/EducationPage';
import NavBar from './NavBar';
import './App.css';
import NotFoundPage from './Pages/NotFoundPage';

// "npm start" to run react page locally
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* Wrap in CSS id */} 
        <div id="page-body">
          {/* Route takes two main props (properties): path (specifies url) and component (specifies component) */}
          <Switch> 
            <Route path ="/" component={HomePage} exact />
            <Route path ="/about" component={AboutPage}  />
            <Route path ="/projects-list" component={ProjectsListPage} />
            <Route path ="/projects/:name" component={ProjectsPage}  />  
            {/* When React sees this "name" url parameter: passes prop to the ProjectsPage component that tells the component the value at the url */}
            <Route path ="/education" component={EducationPage}  />     
            {/*NotFoundPage must be the last one since it has no path and is not exact (Thanks to switch, it doesn't render on every page)*/}
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
