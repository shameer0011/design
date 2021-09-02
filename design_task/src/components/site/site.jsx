import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import Header from "../../components/header/header";
import uXDesign from "../sitepages/uxdesign";
import uiDesign from "../sitepages/uidesign";
import Media from "../sitepages/media";
import Branding from "../sitepages/branding";
import All from "../sitepages/all";
import illustration from "../sitepages/illustration";
const Site = () => {
  const history = useHistory();
  const [redirect, setRedirect] = useState(false);

  const gotoDashbord = () => {
    console.log("in dashbord logout button");
    sessionStorage.clear();
    // history.push('/login', document.title, window.location);
    // window.addEventListener('popstate', function (event)
    // {
    //   history.push('/login', document.title, window.location);
    // });
  };
  let routes = (
    <BrowserRouter>
      <div>
        <Header gotoDashbord={gotoDashbord} />
      </div>
      <Switch>
        <Route path="/all" component={All} exact={true} />
        <Route path="/branding" component={Branding} exact={true} />
        <Route path="/" component={Media} exact={true} />
        <Route path="/uxdesign" component={uiDesign} exact={true} />
        <Route path="/uidesign" component={uXDesign} exact={true} />
        <Route path="/illustration" component={illustration} exact={true} />
      </Switch>
    </BrowserRouter>
  );

  return (
    <>
      <div style={{ marginLeft: "6.5rem" }}>{routes}</div>
    </>
  );
};
export default Site;
