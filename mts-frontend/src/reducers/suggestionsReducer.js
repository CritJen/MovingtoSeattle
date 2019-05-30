import { createReducer, createAction } from "redux-starter-kit";

const initialState = [];

export const addSuggestions = createAction("addSuggestions");

const suggestionsReducer = createReducer(initialState, {
  [addSuggestions]: (state, action) => {
    return [...action.payload];
  }
});

export default suggestionsReducer;
