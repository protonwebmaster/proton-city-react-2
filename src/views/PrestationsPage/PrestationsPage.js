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
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionPrestations from "./Sections/SectionPrestations.js";
import Parallax from "components/Parallax/Parallax.js";
import ProductSection from "./Sections/ProductPage.js";
import SEO from "./Sections/SectionNotifications";
import Analytics from "./Sections/SectionExamples";
import Login from "./Sections/SectionLogin";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
// Sections for this page
import SectionPills from "./Sections/SectionPills.js";
import styled, { keyframes } from "styled-components";
import { rubberBand } from "react-animations";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles(styles);

const Bounce = styled.div`
  animation: 3s ${keyframes`${rubberBand}`} 3s;
`;

export default function PrestationsPage() {
  const classes = useStyles();
  return (
    <div>
      <SectionNavbars />
      <Parallax filter image={require("assets/img/landing-bg-min.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Pulse>
                <h1 className={classes.title}>Prestations.</h1>
              </Pulse>
              <Bounce>
                <h4>Développeur web et web mobile.</h4>
              </Bounce>
              <a href="#section-p2-1">
                <ArrowDropDownCircleIcon />
              </a>
              <br />
              <a href="#section-p2-2">
                <ArrowDropDownCircleIcon />
              </a>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <ScrollableAnchor id={"section-p2-1"}>
          <div></div>
        </ScrollableAnchor>
        <SectionPrestations />
        <SectionPills />
        <SEO />
        <Analytics />
        <Login />
        <ScrollableAnchor id={"section-p2-2"}>
          <div>
            <br />
            <br />
            <br />
          </div>
        </ScrollableAnchor>
        <ProductSection />
        <GridItem>
          <a href="#section-p2-1">
            <ArrowUpwardIcon />
          </a>
        </GridItem>
      </div>
      <Footer />
    </div>
  );
}
