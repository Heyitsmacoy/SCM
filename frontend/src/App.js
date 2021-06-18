import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Positions from "./pages/Positions";
import Login from "./pages/Login";
import Scm from "./pages/Scm";
import EditProduct from "./pages/EditProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/scm" component={Scm} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/positions" component={Positions} />
        <Route path="/editproduct/:id" component={EditProduct} />
      </Switch>
    </BrowserRouter>
  );
}
