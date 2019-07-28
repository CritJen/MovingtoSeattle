import { getHeatMapData } from "./MapContainerUtils";

describe("The map container utilities", () => {
  it("getHeatMapData returns an object", () => {
    const returnValue = getHeatMapData([], []);
    expect(returnValue).toStrictEqual({
      positions: [],
      options: {
        radius: 12,
        opacity: 1
      }
    });
  });

  it("getHeatMapData returns an object containing a valid list of positions when no categories are selected", () => {
    const returnValue = getHeatMapData(
      [
        {
          id: 1,
          name: "Pike Place Chowder",
          latitude: 47.60939,
          longitude: -122.34112,
          tags: ["seafood", "soup"],
          category_id: 1,
          created_at: "2019-06-19T21:47:25.040Z",
          updated_at: "2019-06-19T21:47:25.040Z"
        },
        {
          id: 2,
          name: "Paseo Caribbean Food - Fremont",
          latitude: 47.65849,
          longitude: -122.35031,
          tags: ["caribbean", "sandwiches", "catering"],
          category_id: 1,
          created_at: "2019-06-19T21:47:25.047Z",
          updated_at: "2019-06-19T21:47:25.047Z"
        }
      ],
      [{ id: 1, weight: 1 }]
    );
    expect(returnValue).toStrictEqual({
      positions: [
        {
          lat: 47.6094,
          lng: -122.3411,
          weight: 1
        },
        {
          lat: 47.6585,
          lng: -122.3503,
          weight: 1
        }
      ],
      options: {
        radius: 12,
        opacity: 1
      }
    });
  });
});
