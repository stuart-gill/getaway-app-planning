import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { reduxWeather: state.reduxWeather, sortedCities: state.sortedCities };
};

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

const List = connect(mapStateToProps)(ConnectedList);
export default List;

// The List component receives the prop reduxWeather which is a copy of the reduxWeather array we saw in the Redux state. It comes from the reducer:
//Always remeber: the state in redux comes from reducers

// Class based component version
// class List extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <p>Redux weather from List comp: {this.props.reduxWeather}</p>
//         <ul className="list-group list-group-flush">
//           {setTimeout(() => {
//             this.props.sortedCities.map(el => (
//               <li className="list-group-item" key={el.id}>
//                 Sorted city: {el.name}
//                 <br />
//                 Sorted city location: {el.latlong}
//               </li>
//             ));
//           }, 3500)}
//         </ul>
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ reduxWeather, sortedCities }) => {
//   return { reduxWeather, sortedCities }; //this was Alex's MSTP method
// };

// export default connect(mapStateToProps)(List);
