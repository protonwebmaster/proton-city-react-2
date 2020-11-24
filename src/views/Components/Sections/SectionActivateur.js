/* eslint-disable react/no-unescaped-entities */
import React from "react";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Anssi from "assets/img/anssi-min.png";
import Activateur from "assets/img/marque-Activateur-France-Num-min.jpg";
import Rgpd from "assets/img/rgpd-min.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={6} sm={3}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <a href="https://www.ssi.gouv.fr/">
                <img
                  src={Anssi}
                  alt="anssi"
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </a>
            </ScrollAnimation>
            <Button color="primary" size="lg" simple>
              Attestation ANSSI.
            </Button>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <a href="https://www.francenum.gouv.fr/comprendre-le-numerique/numerisation-des-commerces-de-proximite-letat-lance-un-appel-projets-pour">
                <img
                  src={Activateur}
                  alt="activateur"
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </a>
            </ScrollAnimation>
            <Button color="primary" size="lg" simple>
              Activateur France Num, offreur de solutions.
            </Button>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees">
                <img
                  src={Rgpd}
                  alt="rgpd"
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </a>
            </ScrollAnimation>
            <Button color="primary" size="lg" simple>
              Attestation RGPG.
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
