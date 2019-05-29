import React from "react";
// import { GoogleApiWrapper, Map } from "google-maps-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import Marker from "../views/Marker";
const propTypes = {
  loaded: PropTypes.bool.isRequired,
  selectedCategories: PropTypes.array.isRequired
};

export function MapContainer({ selectedCategories, locations }) {
  const mapStyles = {
    width: "80vh",
    height: "80%"
  };
  const heatMapData = {
    positions: locations.map(location => ({
      lat: location.latitude,
      lng: location.longitude,
      weight: selectedCategories.find(cat => cat.id === location.category_id)
        .weight
    })),
    options: {
      radius: 12,
      opacity: 0.9
    }
  };

  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC5GtsnQTnxNEJuwDpjgb9laNU8Ta35RLw" }}
        defaultZoom={14}
        yesIWantToUseGoogleMapApiInternals
        style={{ mapStyles }}
        heatmapLibrary={true}
        heatmap={heatMapData}
        defaultCenter={{
          lat: 47.6062,
          lng: -122.3321
        }}
      />
      <Marker lat={47.6778651} lng={-122.1726827} show={true} place={"hello"} />
    </>
  );
}
MapContainer.propTypes = propTypes;
//Destructuring the state and passing it into the function so that we can return it as props
function mapStateToProps({ categories, locations }) {
  const selectedCategories = categories.filter(category => category.selected);
  return {
    selectedCategories,
    locations: locations.filter(location =>
      selectedCategories.some(
        selectedCategory => selectedCategory.id === location.category_id
      )
    )
  };
}

export default connect(
  mapStateToProps,
  {}
)(MapContainer);
