import * as courseActions from '../actions/authorActions'
import * as types from '../actions/actionTypes'
import authors from '../reducers/authorReducer';

  describe('Author Actions', () => {
    describe('loadAuthorsSuccess', () => {
        it('should create a LOAD_AUTHORS_SUCCESS action', () => {
          //arrange
          const authors = {id: 'scott-allen', firstname: 'scott', lastname: 'allen'};
          const expectedAction = {
            type: types.LOAD_AUTHORS_SUCCESS,
            authors: authors
          };
          //act
          const action = courseActions.loadAuthorsSuccess(authors);
    
          //assert
          expect(action).toEqual(expectedAction);
        });
    });
      
  });