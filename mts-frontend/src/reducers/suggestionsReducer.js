import { createReducer, createAction } from "redux-starter-kit";

const initialState = [];

export const addSuggestions = createAction("addSuggestions");
export const toggleHovered = createAction("toggleHovered");

const suggestionsReducer = createReducer(initialState, {
  [addSuggestions]: (state, action) => {
    return action.payload.map(suggestion => ({
      ...suggestion,
      hovered: false
    }));
  },
  [toggleHovered]: (state, action) => {
    return state.map(suggestion => {
      if (suggestion.id === action.payload) {
        return { ...suggestion, hovered: !suggestion.hovered };
      } else {
        return suggestion;
      }
    });
  }
});

export default suggestionsReducer;
