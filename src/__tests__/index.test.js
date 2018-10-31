import rootReducer from '../reducers/index';
import { createStore } from 'redux'

let store = createStore(rootReducer)

test('test the root reducer', () => {
    expect(store.getState().courses).toEqual([]);
  });