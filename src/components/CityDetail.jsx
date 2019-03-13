import React from "react";
import { connect } from "react-redux";

const CityDetail = ({ selectedCity, sortedCities }) => {
  console.log({ selectedCity });
  if (sortedCities.length === 0) {
    return <div>Try a new weather serach!</div>;
  } else if (!selectedCity) {
    return (
      <div>
        <h2>Select a City</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{selectedCity.name}</h2>
        <a href={selectedCity.lodging} target="_blank">
          Check Lodging Options
        </a>
        <img src={selectedCity.img} alt={selectedCity.name} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  {
    return { selectedCity: state.selectCity, sortedCities: state.sortedCities };
  }
};

export default connect(mapStateToProps)(CityDetail);
