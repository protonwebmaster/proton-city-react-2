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
import landing from "assets/img/auth0.png";
import profile from "assets/img/profile-min.jpg";
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
          <GridItem xs={12} sm={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <a href="https://fredericbrodar.com/#tech">
                <img
                  src={landing}
                  alt="simulation"
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
              Solution de gestion des identités
              <br />
              et authentification forte.
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <a href="https://fredericbrodar.com/#tech">
                <img
                  src={profile}
                  alt="https://codepen.io/JavaScriptJunkie/pen/YzzNGeR"
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
              Des solutions e-commerce,
              <br />
              avec Stripe.
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
