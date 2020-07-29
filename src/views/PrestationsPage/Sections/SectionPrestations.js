import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles(styles);

export default function SectionPrestations() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <h2>Des possibilités infinies...</h2>
              <p></p>
              <ul>
                <li>
                  - Des ressources infinies avec WordPress, Bootstrap et
                  Materialize.
                </li>
                <li>
                  - Une solution complète de vente en ligne avec un système de
                  paiement sécurisé avec Prestashop ou Magento.
                </li>
                <li>
                  - Un projet de création graphique à l{"'"}image de votre
                  activité.
                </li>
              </ul>
              <p>
                Administration système Linux, pour les configuration serveur
                Apache Ssl ou Nginx, messagerie avec smtp et sms, test de
                vulnérabilités et détection en matières de sécurité des
                applications.
              </p>
            </ScrollAnimation>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
