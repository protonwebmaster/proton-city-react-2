import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0";
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import PrestationsPage from "views/PrestationsPage/PrestationsPage.js";
import EngagementsPage from "views/EngagementsPage/EngagementsPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import LegalePage from "views/MentionsLegales/LegalePage.js";
import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import Protected from "./views/PrestationsPage/Sections/SectionLogin/Protected";
import * as serviceWorker from "./views/PrestationsPage/Sections/SectionLogin/serviceWorker";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/prestations-page" component={PrestationsPage} />
      <Route path="/engagements-page" component={EngagementsPage} />
      <Route path="/pricing-page" component={PricingPage} />
      <Route path="/legale-page" component={LegalePage} />
      <Route path="/" component={Components} />
    </Switch>
    <Security
      issuer="https://dev-169667.okta.com/oauth2/default"
      clientId="0oa98ed3wYpwFvXwP4x6"
      redirectUri={window.location.origin + "/implicit/callback"}
    >
      <SecureRoute path="/protected" component={Protected} />
      <Route path="/implicit/callback" component={LoginCallback} />
    </Security>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
