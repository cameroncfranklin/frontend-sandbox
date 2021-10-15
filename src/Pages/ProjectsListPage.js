import React from 'react';
// import { Link } from 'react-router-dom'; // No longer using this because we moved it to resuable projects list.
import ProjectsList from '../Components/ProjectsList';
import projectsContent from './projects-content';

const ProjectsListPage = () => (
    <React.Fragment>
        <h1>Projects</h1>
        <ProjectsList projects={projectsContent} />
    </React.Fragment>
)

export default ProjectsListPage;








// Previous code (before using ProjectsList as a component)
        /* { {projectsContent.map((project, key) => (
            <Link className="article-list-item" key ={key} to={`/projects/${project.name}`}>
                <h3>{project.title}</h3>
            {/*Now lets create a text preview/sample from the projects 
            It'd probably be a better practice to have this list as its own reusable component}    
            {<p>{project.content[0].substring(0,150)}...</p>
            </Link>
        ))} } } */