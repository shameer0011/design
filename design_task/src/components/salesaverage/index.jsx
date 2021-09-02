import React from "react";
import { Grid } from "@material-ui/core";
const index = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <h1 style={{ color: "blue" }}>10k+</h1>
          <h7 style={{ color: "white" }}>Average monthley sales on envato</h7>
        </Grid>
        <Grid item xs={4} spacing={2}>
          <h1 style={{ color: "blue" }}>100%+</h1>
          <h7 style={{ color: "white" }}>Increase monthley sales on envato</h7>
        </Grid>
        <Grid item xs={4} spacing={2}>
          <h1 style={{ color: "blue" }}>20X+</h1>
          <h7 style={{ color: "white" }}>Increase in quarterly sales </h7>
        </Grid>
      </Grid>
    </div>
  );
};
export default index;
