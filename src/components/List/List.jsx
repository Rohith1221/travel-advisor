import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./styles.js";

function List(props) {
  const classes = useStyles();

  const [type, setType] = useState("restaurants");
  // state , funtion that modifies that state ---> first and second args in usestate
  const [rating, setRating] = useState("");

  const places = [
    { name: "cool place" },
    { name: "Best beer" },
    { name: "good ice cream" },
    { name: "cool place" },
    { name: "Best beer" },
    { name: "good ice cream" },
    { name: "cool place" },
    { name: "Best beer" },
    { name: "good ice cream" },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants , Hotels and Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, index) => (
          <Grid item key={index} xs={12}>
            <PlaceDetails place={place}></PlaceDetails>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default List;
