import { configureStore } from "redux-starter-kit";
import categoriesReducer from "./reducers/categoriesReducer";
import locationsReducer from "./reducers/locationsReducer";
import propertiesReducer from "./reducers/propertiesReducer";

const store = configureStore({
  reducer: {
    locations: locationsReducer,
    categories: categoriesReducer,
    properties: propertiesReducer
  }
});

export default store;
