import {
  ADD_WEATHER,
  SORT_CITIES,
  SELECT_CITY,
  FETCH_WEATHER_DYNAMICALLY
} from "../constants/action-types";

import weatherDotGov from "../apis/weatherDotGov";

// export function addWeather(payload) {
//   console.log(payload);
//   return { type: ADD_WEATHER, payload };
// } // non-fat-arrow version

export const addWeather = (newWeather) => {
  return { type: ADD_WEATHER, payload: newWeather };
};

export const sortCities = (payload) => {
  return { type: SORT_CITIES, payload };
};

export const selectCity = (city) => {
  return { type: SELECT_CITY, payload: city };
};

export const fetchWeatherDynamically = (location) => async (
  dispatch,
  getState
) => {
  const response = await weatherDotGov.get(`/${location}/forecast`);

  dispatch({
    type: FETCH_WEATHER_DYNAMICALLY,
    //payload: { location: location, data: response.data.properties.periods }
    payload: { [location]: response.data.properties.periods }
  });
};

// export const fetchWeather = () => async (dispatch, getState) => {
//   const response = await weatherDotGov.get(`/47.5962%2C-120.6615/forecast`);

//   dispatch({ type: FETCH_WEATHER, payload: response.data.properties.periods });
// };
//^^replace hardcode lat long with ${loc.latlong}

//why does payload here not have to be payload: {name, latlong, etc}
//maybe because sortedcities payload is an array of objects
//if it was a single object maybe it would be listed differently?
//or it we were passed two separate parameters like
//function sortCities(name, latlong)
//then we would say payload: {name, latlong}
//which is the same as payload{name: name, latlong: latlong}
// or perhaps this is because we're passing through middleware first
