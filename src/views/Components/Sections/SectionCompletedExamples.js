import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
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
              <h2>Création de site internet sur mesure.</h2>
              <div className={classes.h4a}>
                <ul>
                  <li>Création site vitrine ( Statique).</li>
                  <li>Création et maintenance site dynamique</li>
                  <li>Spécialiste CMS : Wordpress & Joomla</li>
                  <li>Installation & configuration site E-commerce</li>
                  <li>Administration et maintenance </li>
                  <li>Création de site web responsive & mobile first</li>
                </ul>
              </div>
            </ScrollAnimation>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}