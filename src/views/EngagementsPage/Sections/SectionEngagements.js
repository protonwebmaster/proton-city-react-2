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
              <h2>Les étapes de la préparation.</h2>
              <h4>
                <ul>
                  <li>Wireframe.</li>
                  <li>Mockup.</li>
                  <li>Charte graphique.</li>
                  <li>Cahier des charges.</li>
                  <li>Le contrat.</li>
                </ul>
              </h4>
            </ScrollAnimation>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
