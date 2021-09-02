import React from "react";
import Contact from "../../components/contact/contact";
import { Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import Grid from "@material-ui/core/Grid";
const feedback = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={2}></Grid>
      <Grid item xs={3}>
        <div>
          <div style={{ color: "blue" }}>AboutUs</div>
          <h7 style={{ color: "white" }}>
            portfolio pages
            <br />
            Linkses pages
            <br />
            About Us pages
          </h7>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div>
          <div style={{ color: "blue" }}>QuickLinks</div>
          <h7 style={{ color: "white" }}>
            About Us
            <br />
            Search pages
            <br />
            portfolio pages
          </h7>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div>
          <div style={{ color: "blue" }}>Recent Posts</div>
          <div>
            <Contact />
          </div>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div>
          <div style={{ color: "blue" }}>Subscribe Now</div>
          <div style={{ display: "flex" }}>
            <input type="text" style={{ width: "6rem", height: "1rem" }} />
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "lowercase", height: "25px" }}
            >
              Subscribe
            </Button>
          </div>
          <div style={{ color: "white" }}>
            <FacebookIcon />
            <WhatsAppIcon />
            <TwitterIcon />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
export default feedback;
