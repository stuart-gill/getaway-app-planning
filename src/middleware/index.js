import { sortCities } from "../actions/index";
import { SORT_CITIES } from "../constants/action-types";

const leavenworthImg = require("../images/leavenworth.jpg");
const tacomaImg = require("../images/tacoma.jpeg");
const yakimaImg = require("../images/yakima.jpg");

const cityList = [
  {
    id: 1,
    name: "Leavenworth",
    hours: 2.5,
    latlong: "47.5962%2C-120.6615",
    lodging: "https://www.airbnb.com/a/Leavenworth--United-States",
    img: leavenworthImg
  },
  {
    id: 2,
    name: "Yakima",
    hours: 1.9,
    latlong: "46.6021%2C-120.5059",
    lodging: "https://www.airbnb.com/s/Yakima--WA",
    img: yakimaImg
  },
  {
    id: 3,
    name: "Tacoma",
    hours: 0.75,
    latlong: "47.2529%2C-122.4443",
    lodging: "https://www.airbnb.com/a/Tacoma--United-States",
    img: tacomaImg
  }
];

export function sortCitiesMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === SORT_CITIES) {
        const sortedCities = cityList.filter(
          (city) => city.hours < action.payload.reduxTime
        );

        if (sortedCities.length) {
          return dispatch(sortCities(sortedCities));
        }
      }
      return next(action);
    };
  };
}
//currently returns reduxTime state if sortedCities has no contents (no cities match time constraint)
//need to change to giving some error output
