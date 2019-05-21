import React from "react";
// import { GoogleApiWrapper, Map } from "google-maps-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

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
      lng: location.longitude
    })),
    options: {
      radius: 20,
      opacity: 0.6
    }
  };
  return (
    <>
      {
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC5GtsnQTnxNEJuwDpjgb9laNU8Ta35RLw" }}
          defaultZoom={14}
          style={{ mapStyles }}
          heatmapLibrary={true}
          heatmap={heatMapData}
          defaultCenter={{
            lat: 47.6062,
            lng: -122.3321
          }}
        />
      }
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