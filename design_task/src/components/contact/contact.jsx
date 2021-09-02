import React from "react";
import { useStyles } from "./style";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.display}>
      <AccountCircleRoundedIcon className={classes.iconSettings} />
      <div className={classes.label}>
        <h7 className={classes.colorWhite}>Shameersss</h7>
        <div className={classes.colorBlue}> Designer</div>
      </div>
    </div>
  );
};
export default Contact;
