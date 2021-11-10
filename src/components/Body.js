import React from "react";
import { makeStyles } from "@mui/styles";
import { BodyStyles } from "../styles/BodyStyles";
import Post from "./Post";
import  data  from "../utilities/data.json";
import { Grid } from "@mui/material";

const useStyles = makeStyles(BodyStyles);

function Body() {
  const classes = useStyles();
  return (
    <div className={classes.body} m={5}>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
      
        <Grid item xs={4}>
          <Grid container spacing={2}>
            {data.map((item, i) => (
              <Grid item xs={12} key={'post_'+i}>
                <Post data={item}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}

export default Body;
