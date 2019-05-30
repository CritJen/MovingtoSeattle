import React from "react";
import "./App.css";
import MapContainer from "./containers/MapContainer";
import Page from "./views/Page";
import FiltersContainer from "./containers/FiltersContainer";
import store from "./createStore";
import { Provider } from "react-redux";
import { getLocations } from "./reducers/locationsReducer";
import styles from "./stylesheets/app.module.css";
import "./stylesheets/app.css";
import { getCategories } from "./reducers/categoriesReducer";
import { getProperties } from "./reducers/propertiesReducer";
import SuggestedHomes from "./containers/SuggestedHomes";

store.dispatch(getLocations());
store.dispatch(getCategories());
store.dispatch(getProperties());

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Page
          mapContainer={<MapContainer />}
          topForm={<FiltersContainer />}
          suggestions={<SuggestedHomes />}
        />
      </div>
    </Provider>
  );
}

export default App;
