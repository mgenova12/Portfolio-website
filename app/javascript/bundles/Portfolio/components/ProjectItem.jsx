import PropTypes from 'prop-types';
import React from 'react';

export default class ProjectItem extends React.Component {

  constructor(){
    super();
    this.state = {
      hover:false
    }
  }

  hoverOn(){
    this.setState({hover:true});
  }

  hoverOff(){
    this.setState({hover:false})
  }

  render() {
    return (
      <div className='col-md-4 well' onMouseEnter={this.hoverOn.bind(this)} onMouseLeave={this.hoverOff.bind(this)}>
        <div className="Project" className={ this.state.hover ? "hoverOn" : "hoverOff"}>
            <h4>{this.props.project.title}</h4>
            <p>{this.props.project.description}</p>
        </div> 
      </div>    
    );
  }
}
