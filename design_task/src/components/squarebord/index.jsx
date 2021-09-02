import React from "react";
import { Paper } from "@material-ui/core";

const Index = ({ height, width }) => {
  return (
    <Paper elevation={6}>
      <div>
        <canvas
          width={`${width}px`}
          height={`${height}px`}
          style={{ overflow: "hidden" }}
        ></canvas>
      </div>
    </Paper>
  );
};
export default Index;
