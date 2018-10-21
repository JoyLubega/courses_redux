import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = (props) => {
  const {loading} = props;
  return (
      <nav className="navbar navbar-expand-lg  container-fluid">
            <p className="navbar-brand" href="/">Pluralsight Admin</p>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">        
                <button className="btn btn-warning" ><Link to="/">Home</Link></button>               
                <button className="btn btn-warning"><Link to="/courses">Courses</Link></button>
                <button className="btn btn-warning"><Link to="/about">About</Link></button>   
              </ul>
            </div>
            {loading && <LoadingDots interval={100} dots={20}/>}
          </nav>
          
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
