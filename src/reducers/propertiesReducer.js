import { createReducer, createAction } from "redux-starter-kit";

//Defining initial state
const initialState = [];
const propertiesUrl =
  "http://ec2-18-217-182-61.us-east-2.compute.amazonaws.com:3000/properties";

//Fetches the data from our backend api, passes it into the addLocations action creator, and then dispatches the result
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
