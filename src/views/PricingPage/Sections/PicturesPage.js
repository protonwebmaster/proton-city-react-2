import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Iframe from "react-iframe";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const spacestyle = {
  paddingTop: "100px"
};

export default function PicturesPage() {
  const classes = useStyles();

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div style={spacestyle}>
        <div className={classes.container}>     
          <div className={classes.description}>
          <h4>Les tarifs 2020 en vigueur.</h4>
                    <h6>WordPress Pack 1</h6>
            <p>Des solutions innovantes pour votre projet.</p>
          </div>
          <GridContainer justify="center">
            <Iframe
              url="https://jscalc.io/embed/eHkiQHJQLsIYXSXP"
              width="760"
              height="1200"
              id="pricing"
              className="pricing"
              display="initial"
              position="relative"
            />
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
