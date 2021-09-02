import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import SignalWifi4BarIcon from "@material-ui/icons/SignalWifi4Bar";
import CallIcon from "@material-ui/icons/Call";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import StarIcon from "@material-ui/icons/Star";
const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    color: "white",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    textAlign: "center",
  },
  style: {
    textAlign: "center",
    color: "blue",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});

export default function OutlinedCard({
  signal,
  phone,
  computer,
  signalTitle,
  computerTitle,
  phoneTitle,
  isButton,
  width,
  envato,
  ultralinux,
  appStrome,
  magendo,
  award,
  body,
  feedback,
}) {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={4}>
        <Card
          className={classes.root}
          variant="outlined"
          style={{ minWidth: `${width}px` }}
        >
          <CardContent>
            <div style={{ textAlign: "center" }}>
              {signal && <SignalWifi4BarIcon style={{ color: "blue" }} />}
              {phone && <CallIcon style={{ color: "blue" }} />}
              {computer && <ImportantDevicesIcon style={{ color: "blue" }} />}
            </div>
            {signal && (
              <Typography className={classes.pos}>{signalTitle}</Typography>
            )}
            {phone && (
              <Typography className={classes.pos}>{phoneTitle}</Typography>
            )}
            {computer && (
              <Typography className={classes.pos}>{computerTitle}</Typography>
            )}
            {body && (
              <Typography
                variant="body2"
                component="p"
                className={classes.style}
              >
                well meaning and kindly.
                <br />
                {"a benevolent smile"}
              </Typography>
            )}

            {feedback && (
              <Typography
                variant="body2"
                component="p"
                className={classes.text}
              >
                well meaning and kindly. well meaning and kindly. well meaning
                and kindly. well meaning and kindly.
                <br />
                <StarIcon style={{ color: "yellow" }} />
                <StarIcon style={{ color: "yellow" }} />
                <StarIcon style={{ color: "yellow", marginRight: "8rem" }} />
              </Typography>
            )}
            {envato && (
              <Typography variant="h4" component="p" className={classes.style}>
                envato
              </Typography>
            )}
            {ultralinux && (
              <Typography variant="h4" component="p" className={classes.style}>
                UltraLinux
              </Typography>
            )}
            {appStrome && (
              <Typography variant="h4" component="p" className={classes.style}>
                appStrome
              </Typography>
            )}
            {magendo && (
              <Typography variant="h4" component="p" className={classes.style}>
                Magendo
              </Typography>
            )}
            {award && (
              <Typography variant="h4" component="p" className={classes.style}>
                AWWARD
              </Typography>
            )}
          </CardContent>
          {isButton && (
            <CardActions style={{ justifyContent: "center" }}>
              <Button style={{ color: "white" }}>LEARN MORE</Button>
            </CardActions>
          )}
        </Card>
      </Paper>
    </>
  );
}
