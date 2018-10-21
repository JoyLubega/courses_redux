import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron container">
      <h1>Pluralsight Administration</h1>
      <p>React, Redux and React router in ES6 for Ultraresponsive web apps.</p>
      <Link to="about" className="btn btn-warning btn-lg">Learn more</Link>
    
      </div>
    );
  }
}

export default HomePage;
