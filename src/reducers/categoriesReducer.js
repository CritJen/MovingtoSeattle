import { createReducer, createAction } from "redux-starter-kit";

//Defining initial state
const initialState = [];

const categoriesUrl = "http://localhost:3000/categories";

//Using thunk to handle async call
//When this function is dispatched it returns a callback function that recieved dispatch, makes a fetch request, and dispatches an action based on the result
export const getCategories = () => dispatch => {
  fetch(categoriesUrl)
    .then(resp => resp.json())
    .then(data => dispatch(addCategories(data)));
};

//Creating action creator functions and assigning them to variables
export const addCategories = createAction("addCategory");
export const toggleCategory = createAction("toggleCategory");
export const removeCategory = createAction("removeCategory");
export const changeWeight = createAction("changeWeight");

//Creating the reducer to handle different action types. Finding the action type through toString on the variables
const categoriesReducer = createReducer(initialState, {
  [addCategories]: (state, action) => {
    // takes an array and spreads it to create a new array
    return [...action.payload];
  },
  [toggleCategory]: (state, action) => {
    //finds the appropriate category based on the id in the payload and "mutates" the state to update whether it's selected
    const category = state.find(cat => cat.id === action.payload);
    category.selected = !category.selected;
  },
  [changeWeight]: (state, action) => {
    let newWeight = action.payload.value / 100;
    const category = state.find(cat => cat.id === action.payload.category);
    category.weight = newWeight;
  }
});

//Selector to find selected categories
export function getSelectedCategories(categories) {
  return categories.filter(category => category.selected);
}

export default categoriesReducer;
