export const getHeatMapData = (locations, selectedCategories) => ({
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
});
