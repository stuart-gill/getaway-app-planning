import React from "react";
import { connect } from "react-redux";

const CityDetail = ({ selectedCity, sortedCities }) => {
  if (sortedCities.length === 0) {
    return <div>Try a new weather search!</div>;
  } else if (sortedCities.reduxTime) {
    return null;
  } else if (!selectedCity) {
    return (
      <div>
        <h2>Select a City</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Details for: {selectedCity.name}</h2>
        <a
          href={selectedCity.lodging}
          target="_blank"
          rel="noopener noreferrer">
          Check Lodging Options
        </a>
        <img src={selectedCity.img} alt={selectedCity.name} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { selectedCity: state.selectCity, sortedCities: state.sortedCities };
};

export default connect(mapStateToProps)(CityDetail);
