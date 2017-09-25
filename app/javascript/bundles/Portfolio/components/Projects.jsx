import PropTypes from 'prop-types';
import React from 'react';
import ProjectsItem from './ProjectItem'

export default class Projects extends React.Component {
  

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        // console.log(project)
        return (
          <ProjectsItem key={project.title} project={project} />
        );
      })
    }

    return (
      <div className="Projects"> 
        {projectItems}
      </div> 
    );
  }
}
