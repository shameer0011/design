import React from "react";
import Grid from "@material-ui/core/Grid";
import Media from "../../components/socialmedia/media";
import Bord from "../../components/whitebord/bord";
import Design from "../../components/designagency/index";
import OutlinedCard from "../../components/cards/card";
import About from "../../components/aboutus/about";
import SquareBord from "../../components/squarebord/index";
import Site from "../../components/site/site";
import Sales from "../../components/salesaverage/index";
import Contact from "../../components/contact/contact";
import Feedback from "../../components/feedback/feedback";
import { Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useStyles } from "./dashbord_style";
const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageSetting}>
      <div className={classes.background}>
        <Grid container>
          <Grid item xs={0}>
            <Media />
          </Grid>
          <Grid item xs={0}>
            <Bord width="150" padding="180" />
          </Grid>
          <Grid item xs={5}>
            <Design />
          </Grid>
        </Grid>

        <div>
          <Grid container spacing={10} className={classes.card}>
            <Grid item xs={3}>
              <OutlinedCard
                signal={true}
                signalTitle="Creative Ideas"
                isButton={true}
                width="275"
                body={true}
              />
            </Grid>
            <Grid item xs={3}>
              <OutlinedCard
                computer={true}
                computerTitle="Responsive Design"
                isButton={true}
                width="275"
                body={true}
              />
            </Grid>
            <Grid item xs={3}>
              <OutlinedCard
                phone={true}
                phoneTitle="Lifetime Support"
                isButton={true}
                width="275"
                body={true}
              />
            </Grid>
          </Grid>
        </div>

        <Grid container className={classes.about}>
          <Grid item xs={3}>
            <About />
          </Grid>

          <Grid item xs={4} className={classes.marginSetting}>
            <SquareBord height="200" width="50" />
          </Grid>

          <div className={classes.sqaure}>
            <SquareBord height="200" width="250" />
          </div>
        </Grid>

        <Grid container spacing={12} className={classes.site}>
          <Grid item xs={10} spacing={12}>
            <Site />
          </Grid>
        </Grid>
        <Grid className={classes.sale}>
          <Sales />
        </Grid>
        <div>
          <h3 className={classes.brandText}>Our Brands</h3>
        </div>
        <Grid container className={classes.sites}>
          <Grid item xs={2}>
            <OutlinedCard width="220" envato={true} />
          </Grid>
          <Grid item xs={2}>
            <OutlinedCard width="220" ultralinux={true} />
          </Grid>
          <Grid item xs={2}>
            <OutlinedCard width="220" appStrome={true} />
          </Grid>
          <Grid item xs={2}>
            <OutlinedCard width="220" magendo={true} />
          </Grid>
          <Grid item xs={2}>
            <OutlinedCard width="180" award={true} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.center}>
            <h6 style={{ color: "blue" }}>
              Testmonial and Reviiews Our Custumers
            </h6>
            <h2 style={{ color: "white" }}>
              <b>
                What Our Customers <br /> Are Saying
              </b>
            </h2>
          </Grid>
        </Grid>
        <Grid container spacing={5} className={classes.center}>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <OutlinedCard width="220" feedback={true} />
            <div className={classes.cardSet}>
              <Contact />
            </div>
          </Grid>
          <Grid item xs={3}>
            <OutlinedCard width="220" feedback={true} />
            <div className={classes.outline}>
              <Contact />
            </div>
          </Grid>
          <Grid item xs={3}>
            <OutlinedCard width="220" feedback={true} />
            <div className={classes.contact}>
              <Contact />
            </div>
          </Grid>
        </Grid>
        <div className={classes.feedback}>
          <Feedback />
        </div>
      </div>
    </div>
  );
};
export default Index;
