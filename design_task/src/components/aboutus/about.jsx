import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./aboutstyle";
const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.colorWhite}>
      <h7 className={classes.colorBlue}>
        <b>About Us</b>
      </h7>
      <h2>
        What Our Design
        <br />
        Skills Included
      </h2>
      <h7>
        We are a fully in house digital agency <br />
        focusing on branding,marketing,web <br />
        design and developing with clients <br />
        ranging from start ups
      </h7>
      <div className={classes.label}>
        <h7>
          We are a fully in house digital agency <br />
          focusing on branding,marketing,web <br />
          design and developing with clients <br />
          ranging from start ups
        </h7>
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ textTransform: "lowercase" }}
      >
        Get Start
      </Button>
    </div>
  );
};
export default About;
