import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Cicd from "./SectionCicd";
import styles from "assets/jss/material-kit-react/views/landingPageSections/devopsStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>
              Déploiement en continu et démonstration.
            </h2>
            <h3>Devis en ligne.</h3>
            <h5 className={classes.description}>
              Pour un large choix de produits mis à votre disposition.
            </h5>
          </GridItem>
        </GridContainer>
        <div className={classes.text}>
          <Cicd />
        </div>
      </div>
    </div>
  );
}
