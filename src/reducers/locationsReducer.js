import { createReducer, createAction } from "redux-starter-kit";

//Defining initial state
const initialState = [];
const locationsUrl = "http://localhost:3000/locations";

//Using thunk to handle async call
//When this function is dispatched it returns a callback function that recieved dispatch, makes a fetch request, and dispatches an action based on the result
export const getLocations = () => dispatch => {
  fetch(locationsUrl)
    .then(resp => resp.json())
    .then(data => dispatch(addLocations(data)));
};

//Creating action creator function and assigning it to a variable
export const addLocations = createAction("addLocations");

//Creating the reducer to handle different action types. Finding the action type through toString on the variables (brackets around the object key causes it to be evaluated)
const locationsReducer = createReducer(initialState, {
  [addLocations]: (state, action) => {
    return [...action.payload];
  }
});

//Selector to find selected locations
export function getSelectedLocations(locations) {
  return locations.filter(category => category.selected);
}

export default locationsReducer;
