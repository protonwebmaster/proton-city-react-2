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
import facebook from "assets/img/facebook-analytics-min.png";
import segment from "assets/img/segment-min.png";
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
            <Link to="prestations-page" className={classes.link}>
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <img
                  src={facebook}
                  alt="facebook"
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
                Facebook analytics.
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="prestations-page" className={classes.link}>
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <img
                  src={segment}
                  alt="segment"
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
                Segment avec Google Analytics.
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
