import { createReducer, createAction } from "redux-starter-kit";

//Defining initial state
const initialState = [];
const propertiesUrl = "http://localhost:3000/properties";

//Using thunk to handle async call
//When this function is dispatched it returns a callback function that recieved dispatch, makes a fetch request, and dispatches an action based on the result
export const getProperties = () => dispatch => {
  fetch(propertiesUrl)
    .then(resp => resp.json())
    .then(data => dispatch(addProperty(data)));
};

//Creating action creator functions and assigning them to variables
export const addProperty = createAction("addProperty");

//Creating the reducer to handle different action types. Finding the action type through toString on the variables
const propertiesReducer = createReducer(initialState, {
  [addProperty]: (state, action) => {
    return [...action.payload];
  }
});

//Selector to find selected locations

export default propertiesReducer;
