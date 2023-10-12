import React from 'react';
import ProjectItem from './ProjectItem';
import '../Styles/Projects.css';
import { Proj_list } from './ProjectList';

function Projects() {
  return(
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className = 'projectList'>
        {
          Proj_list.map((list, id) => {
            return(
              <ProjectItem name = {list.name} image = {list.image} url = {list.url} key={id}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default Projects
