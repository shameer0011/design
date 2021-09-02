import React from "react";
import Bord from "../whitebord/bord";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

const media = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Bord width="150" padding="120" />
      </Grid>
      <Grid item xs={6} spacing={2}>
        <Bord width="40" padding="180" color="#6495ED" text={true} />
      </Grid>
      <Grid item xs={6} style={{ position: "absolute", top: "400px" }}>
        <Bord width="40" padding="180" color="#6495ED" text={true} />
      </Grid>
      <Grid
        item
        xs={6}
        style={{ position: "absolute", top: "520px", marginLeft: "470px" }}
      >
        <Bord width="150" padding="120" />
      </Grid>
      <Button
        variant="contained"
        color="primary"
        style={{
          textTransform: "lowercase",
          position: "absolute",
          top: "49.3rem",
          right: "40.5rem",
        }}
      >
        Get Start
      </Button>
    </Grid>
  );
};
export default media;
