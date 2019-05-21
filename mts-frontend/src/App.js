import React from "react";
import "./App.css";
import MapContainer from "./containers/MapContainer";
import Page from "./views/Page";
import FiltersContainer from "./containers/FiltersContainer";
import store from "./createStore";
import { Provider } from "react-redux";
import { getLocations } from "./reducers/locationsReducer";

store.dispatch(getLocations());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Page
          mapContainer={<MapContainer />}
          topForm={<FiltersContainer />}
          rightBar={<div />}
        />
      </div>
    </Provider>
  );
}

export default App;
