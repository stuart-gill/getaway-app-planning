import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
//import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 210
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function WeatherListCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const weatherAndTemp = `${props.daysWeather.temperature} + ${
    props.daysWeather.shortForecast
  }`;

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        /* avatar={
          <Avatar aria-label="weather" className={classes.avatar}>
            YAK
          </Avatar>
        } */
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.daysWeather.name}
        subheader={weatherAndTemp}
      />
      <CardMedia
        className={classes.media}
        image={props.daysWeather.icon}
        title="Weather pic"
      />
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.daysWeather.detailedForecast}
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {props.daysWeather.detailedForecast}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
