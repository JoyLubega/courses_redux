import authorReducer from '../reducers/authorReducer';
import * as actions from '../actions/authorActions';

    describe('authorReducer', () => {
        it('should load course when passed LOAD_AUTHOR_SUCCESS', () => {
            const initialState = [
                {name: 'name'},
                {title: 'redux'}
            ];
            const newAuthor = [{title: 'js'}];
            const action = actions.loadAuthors(newAuthor);
            const newState = authorReducer(initialState, action);
            expect(newState[0].name).toEqual('name');
            });
    })
    