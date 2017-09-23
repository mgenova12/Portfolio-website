import PropTypes from 'prop-types';
import React from 'react';
import Projects from './Projects'

export default class Pages extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: 'name1',
          category: 'cat1'
        },
        {
          title: 'name2',
          category: 'cat2'
        }
      ]
    }

  }

  render() {
    console.log(this.props.name)
    return (
      <div> 
        <h2> SHOW SOMETHING </h2>
        <Projects projects={this.state.projects}/>
      </div> 
    );
  }
}
