import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ScrollableAnchor from "react-scrollable-anchor";
// @material-ui/icons
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CvLoader from "./Sections/ButtonLoader/catalogue";
import SectionNavbars from "./Sections/SectionNavbars.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
// Sections for this page
import DevOps from "./Sections/SectionDevops";
import Contact from "./Sections/SectionNotifications";
import ProductSection from "./Sections/ProductSection.js";
import Calculator from "./Sections/PicturesPage.js";
import styled, { keyframes } from "styled-components";
import { rubberBand } from "react-animations";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles(styles);

const Bounce = styled.div`
  animation: 3s ${keyframes`${rubberBand}`} 3s;
`;

export default function PricingPage() {
  const classes = useStyles();
  return (
    <div>
      <SectionNavbars />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Pulse>
                <h1 className={classes.title}>La simulation.</h1>
              </Pulse>
              <Bounce>
                <h4>Calcul rapide de vos besoins en ligne.</h4>
              </Bounce>
              <br />
              <CvLoader />
              <br />
              <a href="#section-p2">
                <ArrowDropDownCircleIcon />
              </a>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ScrollableAnchor id={"section-p2"}>
            <div></div>
          </ScrollableAnchor>
          <ProductSection />
          <DevOps />
          <Contact />
          <Calculator />
          <GridItem md={12} className={classes.textCenter}>
            <a href="#section-p2">
              <ArrowUpwardIcon />
            </a>
          </GridItem>
        </div>
      </div>
      <Footer />
    </div>
  );
}
