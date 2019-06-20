import { configureStore } from "redux-starter-kit";
import categoriesReducer from "./reducers/categoriesReducer";
import locationsReducer from "./reducers/locationsReducer";
import propertiesReducer from "./reducers/propertiesReducer";
import suggestionsReducer from "./reducers/suggestionsReducer";

const store = configureStore({
  reducer: {
    locations: locationsReducer,
    categories: categoriesReducer,
    properties: propertiesReducer,
    suggestions: suggestionsReducer
  }
});

export default store;
