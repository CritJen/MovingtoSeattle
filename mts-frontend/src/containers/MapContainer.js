import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {
  loaded: PropTypes.bool.isRequired,
  selectedCategories: PropTypes.array.isRequired
};

function MapContainer({ google, loaded, selectedCategories }) {
  if (!loaded) {
    return <div>Loading...</div>;
  }
  const mapStyles = {
    width: "90%",
    height: "90%"
  };
  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 47.6062,
        lng: -122.3321
      }}
    />
  );
}
MapContainer.propTypes = propTypes;
function mapStateToProps({ categories }) {
  return {
    selectedCategories: categories.filter(category => category.selected)
  };
}

export default connect(
  mapStateToProps,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyC5GtsnQTnxNEJuwDpjgb9laNU8Ta35RLw"
  })(MapContainer)
);
