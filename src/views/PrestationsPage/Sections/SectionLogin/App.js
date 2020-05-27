import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import Connexion from "./Connexion";
import Protected from "./Protected";

const App = () => (
  <Router>
    <Security
      issuer="https://dev-169667.okta.com/oauth2/default"
      clientId="0oa98ed3wYpwFvXwP4x6"
      redirectUri={window.location.origin + "/implicit/callback"}
    >
      <Route path="/prestations-page" exact={true} component={Connexion} />
      <Route path="/" exact={true} component={Connexion} />
      <SecureRoute path="/protected" component={Protected} />
      <Route path="/implicit/callback" component={LoginCallback} />
    </Security>
  </Router>
);

export default App;
