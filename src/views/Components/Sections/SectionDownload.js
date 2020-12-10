/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Login from "../../PrestationsPage/Sections/SectionLogin/App";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import { Link } from "react-router-dom";
import Blink from "./Blink";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
          <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >          
            <h2>Graphiste webdesigner</h2>
            <div className={classes.h4a}>
                <ul>
                  <li>Logo</li>
                  <li>Carte de visite</li>
                  <li>Flyer</li>
                  <li>Retouche photo</li>
                  <li>Réalisation 3D</li>
                  <li>Analyse et recherche d'image.</li>
                </ul>           
            </div>
            </ScrollAnimation>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
          <Link to="prestations-page" className={classes.link}>
            <Button
              color="primary"
              size="lg"
              >
              Graphisme
            </Button>
            </Link>
            </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
          <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
            <h2>Référencement web.</h2>
            <div className={classes.h4a}>
            Une bonne visibilité sur le Web, pour une projet réussi.
              <br />
              Avec un outil de choix :{" "}
              <a
                href="https://www.google.fr/intl/fr/webmasters/"
                target="_blank"
              >
                Google Webmasters.
              </a>
              <br />
              Etude de mots-clés pour générer du traffic.
              <br />
              Monétisation avec : {" "}
               <a
                href="https://www.google.fr/intl/fr/adsense/start/"
                target="_blank"
              >
                 Google AdSense.
              </a>
          </div>
            </ScrollAnimation>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
          <Link to="prestations-page" className={classes.link}>
            <Button
              color="rose"
              size="lg"
              >
              SEO
            </Button>
            </Link>
            </GridItem>
        </GridContainer>           
       </div>
    </div>
  );
}
