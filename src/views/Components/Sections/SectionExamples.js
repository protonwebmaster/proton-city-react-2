/* eslint-disable react/no-unescaped-entities */
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";
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
            <Link to="pricing-page" className={classes.link}>
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
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
              </ScrollAnimation>
              <Button color="primary" size="lg" simple>
                Rigueur et précision pour un résultat
                <br /> optimal.
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="prestations-page" className={classes.link}>
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
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
              </ScrollAnimation>
              <Button color="primary" size="lg" simple>
                Des solutions e-commerce.
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
