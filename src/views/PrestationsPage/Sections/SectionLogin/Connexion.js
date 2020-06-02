import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Modal from "./Modal";
import okta from "assets/img/okta-min.png";

const useStyles = makeStyles(styles);

const Connexion = () => {
  const classes = useStyles();
  const { authService, authState } = useOktaAuth();

  const login = async () => {
    authService.login("/");
  };
  const logout = async () => {
    authService.logout("/");
  };

  if (authState.isPending) {
    return <div>Chargement...</div>;
  }

  if (!authState.isAuthenticated) {
    return (
      <div className={classes.section}>
        <p>Non connecté</p>
        <GridItem xs={12} sm={8} md={6}>
          <Button onClick={login} color="info" size="lg">
            Connexion
          </Button>
        </GridItem>
      </div>
    );
  }

  return (
    <div className={classes.section}>
      <Modal />
      <p>Connexion</p>
      <Link to="/protected">Lien protegé</Link>
      <br />
      <a href="https://www.okta.com/products/single-sign-on/">
        <img
          src={okta}
          alt="okta"
          className={
            classes.imgRaised +
            " " +
            classes.imgRounded +
            " " +
            classes.imgFluid
          }
        />
      </a>
      <GridItem xs={12} sm={8} md={6}>
        <Button onClick={logout} color="rose" size="lg">
          déconnexion
        </Button>
      </GridItem>
    </div>
  );
};

export default Connexion;
