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
import Parallax from "components/Parallax/Parallax.js";
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

export default function LegalePage() {
  const classes = useStyles();
  return (
    <div>
      <SectionNavbars />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Pulse>
                <h1 className={classes.title}>Mentions Légales.</h1>
              </Pulse>
              <Bounce>
                <h4>Mentions Légales, CGU et conditions de vente.</h4>
              </Bounce>
              <a href="#section-p4">
                <ArrowDropDownCircleIcon />
              </a>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <ScrollableAnchor id={"section-p4"}>
          <div></div>
        </ScrollableAnchor>
        <SectionPills />
        <GridItem md={12} className={classes.textCenter}>
          <a href="#section-p4">
            <ArrowUpwardIcon />
          </a>
        </GridItem>
      </div>
      <Footer />
    </div>
  );
}
