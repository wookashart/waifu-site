import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./components/Main.js";
import Cards from "./components/CardsDeck.js";
import Wishlist from "./components/Wishlist.js";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Main {...props} />} />
      <Route exact path="/user/:userID/Cards" render={(props) => <Cards {...props} />} />
      <Route exact path="/user/:userID/Profile" render={(props) => <Layout {...props} page="profile" />} />
      <Route exact path="/user/:userID/Wishlist" render={(props) => <Wishlist {...props} />} />
    </Switch>
  );
}

export default App;
