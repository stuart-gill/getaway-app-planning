import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { reduxWeather: state.acceptableWeather };
};

const ConnectedList = ({ reduxWeather }) => <p>{reduxWeather}</p>;

const List = connect(mapStateToProps)(ConnectedList);
export default List;

// The List component receives the prop reduxWeather which is a copy of the reduxWeather array we saw in the Redux state. It comes from the reducer:
//Always remeber: the state in redux comes from reducers
