import { createReducer, createAction } from "redux-starter-kit";

//Defining initial state
const initialState = [
  { name: "Restaurants", id: 1, selected: false },
  { name: "Fitness", id: 2, selected: false },
  { name: "Arts", id: 3, selected: false }
];

//Creating action creator functions and assigning them to variables
export const addCategory = createAction("addCategory");
export const toggleCategory = createAction("toggleCategory");
export const removeCategory = createAction("removeCategory");

//Creating the reducer to handle different action types. Finding the action type through toString on the variables
const categoriesReducer = createReducer(initialState, {
  [addCategory]: (state, action) => {
    // "mutate" the array by calling push()
    state.push(action.payload);
  },
  [toggleCategory]: (state, action) => {
    const category = state.find(cat => cat.id === action.payload);
    // "mutate" the object by overwriting a field
    category.selected = !category.selected;
  },
  [removeCategory]: (state, action) => {
    // Can still return an immutably-updated value if we want to
    return state.filter((todo, i) => i !== action.payload.index);
  }
});

//Selector to find selected categories
export function getSelectedCategories(categories) {
  return categories.filter(category => category.selected);
}

export default categoriesReducer;
