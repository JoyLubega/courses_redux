import configureStore from '../store/configureStore';

it("should set the supplied initial state", () => {
    const initialState = {
    };

    const store = configureStore(initialState);
    expect(store.getState()).toEqual({
        "ajaxCallsInProgress": 0, "authors": [], "courses": []
    });
  });
