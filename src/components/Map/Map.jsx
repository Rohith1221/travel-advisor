import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import styles from "./styles";

function Map(props) {
  const classes = useStyles(); // hook
  const isMobile = useMediaQuery("(min-width:600px)"); //hook

  const coordinates = { lat: 0, long: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
