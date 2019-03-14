import axios from "axios";

export default axios.create({
  baseURL: `https://api.weather.gov/points`
});

// rest of api: /${loc.latlong}/forecast
