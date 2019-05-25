import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import WeatherListCard from "./WeatherListCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 900,
    height: 3000
  }
}));

function WeatherGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList} cols={3}>
        {props.weatherList.map((item) => (
          <GridListTile key={item.number} cols={1}>
            <WeatherListCard daysWeather={item} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default WeatherGridList;
