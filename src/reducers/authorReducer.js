import * as types from '../actions/actionTypes';
import initialState from './initialState';

const authors=(state = initialState.authors, action)=> {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
};
export default authors;