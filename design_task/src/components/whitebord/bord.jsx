import React, { useState } from "react";
import { useStyles } from "./bordStyle";
const Bord = ({ width, padding, text, color }) => {
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.text}
        style={{
          padding: `${padding}px`,
          width: `${width}px`,
          backgroundColor: `${color}`,
        }}
      >
        {text && (
          <>
            <div>
              <h6
                style={{
                  position: "absolute",
                  Margintop: "6rem",
                  marginRight: "200px",
                }}
              ></h6>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Bord;
