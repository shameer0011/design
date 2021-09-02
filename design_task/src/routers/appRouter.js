import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashbord from "../pages/dashbord";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Dashbord} exact={true} />
          {/* <Route path="/home" component={Home} exact ={true}/>
          <Route path="/test" component={Test} exact={true} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
