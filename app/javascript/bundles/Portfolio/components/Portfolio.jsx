import PropTypes from 'prop-types';
import React from 'react';
import Projects from './Projects'

export default class Portfolio extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

  getProjects(){
    $.ajax({
      url: 'http://localhost:3000/api/v1/projects',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({projects: data}, function(){
          // console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  componentWillMount(){
    this.getProjects();
  }


  render() {
    return (
      <div> 
        <Projects projects={this.state.projects}/>
      </div> 
    );
  }
}
