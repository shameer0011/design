import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./header_style";
import { Button, AppBar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MoreIcon from "@material-ui/icons/MoreVert";

const Header = ({ gotoDashbord }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const gotoLogout = () => {
    gotoDashbord(gotoLogout);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <>
      <div>
       <div >
        <div>
          <h7 style={{ color: "blue" }}><b>Our Portfolio</b></h7>
          
        </div>
        <div style={{ display: "flex" ,color:"white"}}>
          <h7>Let's See <br /> Our Latest Works</h7>
          </div>
          <div className={classes.grow}>
            <AppBar
              position="static"
              elevation={0}
              style={{ backgroundColor: "#1F2022",marginBottom:"2rem" }}
            >
              <Toolbar style={{ minHeight: 0 }}>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <div>
                    <NavLink
                      to="/all"
                      exact={true}
                      style={{
                        marginRight: "30px",
                        textDecoration: "none",
                      }}
                    >
                      {" "}
                      ALL
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/branding"
                      exact={true}
                      style={{
                        marginRight: "30px",
                        textDecoration: "none",
                      }}
                    >
                      Branding
                    </NavLink>
                  </div>
                  <div >
                    <NavLink
                      to="/"
                      exact={true}
                      style={{
                        marginRight: "30px",
                        textDecoration: "none",
                        color:"white"
                      }}
                    >
                      Media
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/illustration"
                      exact={true}
                      style={{
                        marginRight: "30px",
                        textDecoration: "none",
                      }}
                    >
                      Illustration
                    </NavLink>
                  </div>

                  <div>
                    <NavLink
                      to="/uidesign"
                      exact={true}
                      style={{
                        marginRight: "30px",
                        textDecoration: "none",
                      }}
                    >
                      UI Design
                    </NavLink>
                  </div>
                  <div>
                  <NavLink
                      to="/uxdesign"
                      exact={true}
                      style={{
                        marginRight: "30px",
                        textDecoration: "none",
                      }}
                    >
                      UX Design
                    </NavLink>
                  </div>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
