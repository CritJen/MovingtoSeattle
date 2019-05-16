import { configureStore } from "redux-starter-kit";
import categoriesReducer from "./reducers/categoriesReducer";

const store = configureStore({
  reducer: {
    // locations: locationsReducer,
    categories: categoriesReducer
  }
});

export default store;
