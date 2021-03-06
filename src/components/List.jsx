import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCity } from "../actions";
import WeatherList from "./WeatherList";

class List extends Component {
  renderList() {
    console.log(this.props.sortedCities);
    return this.props.sortedCities.map((city) => {
      return (
        <div key={city.id}>
          <div>
            <button onClick={() => this.props.selectCity(city)}>
              {city.name}
            </button>
            <WeatherList location={city.latlong} name={city.name} />
            {console.log(`weatherlist run with location of ${city.latlong}`)}
          </div>
        </div>
      );
    });
  }

  renderError() {
    const travelTime = ` ${this.props.sortedCities.reduxTime}`;
    return (
      <h2>
        Sorry, there are no cities that are within
        {travelTime} hours of travel. Try raising your travel time.
      </h2>
    );
  }

  render() {
    if (this.props.sortedCities.reduxTime) {
      //tests for condition where sort cities middleware fails(no cities returned given redux time input, so sortcities returns the redux time instead of sorted cities array)
      return <div>{this.renderError()}</div>;
    } else if (this.props.sortedCities !== undefined) {
      return (
        <div>
          <div>{this.renderList()}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return { reduxWeather: state.reduxWeather, sortedCities: state.sortedCities };
};

export default connect(
  mapStateToProps,
  { selectCity } //this function is wrapped in a store.dispatch function by connect() method
)(List);

//don't need this.props.reduxWeather because this is a functional component , not class component

// const ConnectedList = ({ reduxWeather, sortedCities }) => (
//   <div>
//     <p>Redux weather from List comp: {reduxWeather}</p>
//     <ul className="list-group list-group-flush">
//       {sortedCities.map(el => (
//         <li className="list-group-item" key={el.id}>
//           Sorted city: {el.name}
//           <br />
//           Sorted city location: {el.latlong}
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// const mapStateToProps = state => {
//   return { reduxWeather: state.reduxWeather, sortedCities: state.sortedCities };
// };
// const List = connect(mapStateToProps)(ConnectedList); //connect() returns another function. The second () invokes that returned function
// export default List;

// The List component receives the prop reduxWeather which is a copy of the reduxWeather array we saw in the Redux state. It comes from the reducer:
//Always remeber: the state in redux comes from reducers

// const mapStateToProps = ({ reduxWeather, sortedCities }) => {
//   return { reduxWeather, sortedCities }; //this was Alex's MSTP method
// };
