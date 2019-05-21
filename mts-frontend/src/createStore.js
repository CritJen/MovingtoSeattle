import { configureStore } from "redux-starter-kit";
import categoriesReducer from "./reducers/categoriesReducer";
import locationsReducer from "./reducers/locationsReducer";

const store = configureStore({
  reducer: {
    locations: locationsReducer,
    categories: categoriesReducer
  }
});

export default store;
