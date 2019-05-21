import { createReducer, createAction } from "redux-starter-kit";

//Defining initial state
const initialState = [];
const locationsUrl = "http://localhost:3000/locations";

//Fetches the data from our backend api, passes it into the addLocations action creator, and then dispatches the result
export const getLocations = () => dispatch => {
  fetch(locationsUrl)
    .then(resp => resp.json())
    .then(data => dispatch(addLocations(data)));
};

//Creating action creator functions and assigning them to variables
export const addLocations = createAction("addLocations");

//Creating the reducer to handle different action types. Finding the action type through toString on the variables
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
