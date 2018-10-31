import React from 'react';
import {App, mapStateToProps} from '../../components/App';
import { shallow} from 'enzyme';
import Header from '../../components/common/Header';

const setup=() =>{
    const props = {
      loading:true,
      children:{}
    };
  
    return shallow(<App {...props} />);
}

test('renders the app component', () => {
  const wrapper = setup(true)
  expect(wrapper).toHaveLength(1);
});

test('mapStateToprops', () => {
  const initialState = {
    ajaxCallsInProgress: 0
  };

  // Just call the method directly passing in sample data
  // to make sure it does what it's supposed to

  expect(mapStateToProps(initialState).loading).toBe(false);
});