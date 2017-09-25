import PropTypes from 'prop-types';
import React from 'react';

export default class ProjectItem extends React.Component {

  render() {
    return (
        
        <div className='col-md-4 well'>
          <div className="Project "> 
            {this.props.project.title}<br/>
            {this.props.project.description}
          </div> 
        </div>  
      
    );
  }
}
