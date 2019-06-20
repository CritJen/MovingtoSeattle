// eslint-disable-next-line
Number.prototype.toRad = function() {
  return (this * Math.PI) / 180;
};

export function findDistance(locations, properties) {
  const propertiesWithLocations = properties.map(property => {
    return {
      ...property,
      nearbyLocations: locations.filter(location => {
        //Uses the Haversine Formula to calculate the locations within a defined radius of a property
        var lat2 = location.latitude;
        var lon2 = location.longitude;
        var lat1 = property.latitude;
        var lon1 = property.longitude;

        var R = 6371; // km
        //has a problem with the .toRad() method below.
        var x1 = lat2 - lat1;
        var dLat = x1.toRad();
        var x2 = lon2 - lon1;
        var dLon = x2.toRad();
        var a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1.toRad()) *
            Math.cos(lat2.toRad()) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;

        return d < 2;
      })
    };
  });
  //Sorts the array of properties based on the number of locations within the designated radius
  const sortedProperties = propertiesWithLocations.sort((a, b) =>
    a.nearbyLocations.length > b.nearbyLocations.length
      ? -1
      : b.nearbyLocations.length > a.nearbyLocations.length
      ? 1
      : 0
  );
  return sortedProperties.slice(0, 10);
}
