import React from "react";
// import { GoogleApiWrapper, Map } from "google-maps-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import Marker from "../views/Marker";

const propTypes = {
  selectedCategories: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  suggestions: PropTypes.array.isRequired
};

export function MapContainer({ selectedCategories, locations, suggestions }) {
  const mapStyles = {
    width: "80vh",
    height: "80%"
  };
  const heatMapData = {
    positions: locations
      // .filter((location, index) => index > 200 && index < 250)
      .map(location => ({
        lat: Math.round(location.latitude * 10000) / 10000,
        lng: Math.round(location.longitude * 10000) / 10000,
        weight: selectedCategories.find(cat => cat.id === location.category_id)
          .weight
      })),
    options: {
      radius: 12,
      opacity: 1
    }
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
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
      >
        {suggestions.map(rental => {
          return (
            <Marker
              key={rental.id}
              lat={rental.latitude}
              lng={rental.longitude}
              show={true}
              place={"hello"}
              text={"Hi!"}
              hovered={rental.hovered}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
MapContainer.propTypes = propTypes;
//Destructuring the state and passing it into the function so that we can return it as props
function mapStateToProps({ categories, locations, suggestions }) {
  const selectedCategories = categories.filter(category => category.selected);
  return {
    selectedCategories,
    suggestions,
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
