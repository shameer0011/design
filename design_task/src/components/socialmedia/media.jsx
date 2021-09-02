import React from "react";
import { useStyles } from "./mediaStyle";
import ColoredLine from "../lines/line";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
const Media = () => {
  const classes = useStyles();
  return (
    <>
      <div style={{ border: "1px solid", backgroundColor: "#1F2022" }}>
        <div style={{ position: "absolute", top: "70px", marginLeft: "20px" }}>
          <img
            src="http://www.clker.com/cliparts/1/Z/D/v/b/9/new-hi.png"
            alt="image"
            style={{ width: "20px" }}
          />
        </div>

        <p className={classes.text}> quisquam.</p>
        <div style={{ paddingTop: "80px" }}>
          <ColoredLine color="gray" height={2} width="26" />
          <ColoredLine color="gray" height={2} width="46" />
          <ColoredLine color="gray" height={2} width="56" />
        </div>
        <div style={{ marginLeft: "15px", marginTop: "60px",color:"white" }}>
          <div>
            <FacebookIcon />
          </div>
          <div>
            <WhatsAppIcon />
          </div>
          <div>
            <TwitterIcon />
          </div>
        </div>
      </div>
    </>
  );
};
export default Media;
