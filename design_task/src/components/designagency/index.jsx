import React from "react";
import { Button } from "@material-ui/core";
import logo from "../../images/3.jpg";
const Index = () => {
  var sectionStyle = {
    width: "100%",
    height: "361px",
    backgroundImage: `url(${logo})`,
  };
  return (
    <div style={sectionStyle}>
      <div style={{ height: "22.5rem", border: "1px solid" }}>
        <h2 style={{ textAlign: "center", marginTop: "80px", color: "white" }}>
          Branding and Digital
          <br />
          Design Agency
        </h2>
        <h5 style={{ textAlign: "center", marginTop: "60px", color: "white" }}>
          You will enjoy modern home confirts in a <br /> traditional settings
        </h5>
        <Button
          variant="contained"
          color="primary"
          style={{ textTransform: "lowercase", marginLeft: "7rem" }}
        >
          View More
        </Button>
      </div>
    </div>
  );
};
export default Index;
