import React from "react";
// import Nav from "./Components/Nav/Nav";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Detail from "./Pages/Detail/Detail";
import Category from "./Pages/Category/Category";
import Join from "./Pages/Join/Join";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
