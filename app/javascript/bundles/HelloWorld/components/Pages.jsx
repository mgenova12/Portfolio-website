import PropTypes from 'prop-types';
import React from 'react';
import Projects from './Projects'

export default class Pages extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.name)
    return (
      <div> 
        <h2> SHOW SOMETHING </h2>
        <Projects />
      </div> 
    );
  }
}
