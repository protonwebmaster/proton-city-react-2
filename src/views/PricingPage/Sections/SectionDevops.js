/* eslint-disable react/no-unescaped-entities */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import landing from "assets/img/rancher-min.png";
import profile from "assets/img/netlify-min.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles(styles);

export default function SectionDevops() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <a href="http://protonwebmaster-p-brqcw-wordpress.protonwebmaster-p-brqcw.62.171.138.126.xip.io/">
                <img
                  src={landing}
                  alt="rancher"
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
              Containérisation avec Rancher.
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <a href="https://www.netlify.com/">
                <img
                  src={profile}
                  alt="netlify"
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
              Déploiement en continu avec Netlify.
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
