import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from './common/Header';
import {connect} from 'react-redux';

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        
        <Header
        loading ={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes={
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
 export const mapStateToProps=(state)=>{
  return{
    loading: state.ajaxCallsInProgresss > 0
  };
};

export default connect(mapStateToProps)(App);
