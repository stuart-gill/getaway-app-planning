import React from "react";
import { connect } from "react-redux";

//don't need this.props.reduxWeather because this is a functional component , not class component

const ConnectedList = ({ reduxWeather, sortedCities }) => (
  <div>
    <p>Redux weather from List comp: {reduxWeather}</p>
    <ul className="list-group list-group-flush">
      {sortedCities.map(el => (
        <li className="list-group-item" key={el.id}>
          Sorted city: {el.name}
          <br />
          Sorted city location: {el.latlong}
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return { reduxWeather: state.reduxWeather, sortedCities: state.sortedCities };
};

const List = connect(mapStateToProps)(ConnectedList); //connect() returns another function. The second () invokes that returned function

export default List;

// The List component receives the prop reduxWeather which is a copy of the reduxWeather array we saw in the Redux state. It comes from the reducer:
//Always remeber: the state in redux comes from reducers

// const mapStateToProps = ({ reduxWeather, sortedCities }) => {
//   return { reduxWeather, sortedCities }; //this was Alex's MSTP method
// };
