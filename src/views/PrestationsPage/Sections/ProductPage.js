import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import WebSharpIcon from "@material-ui/icons/WebSharp";
import StoreSharpIcon from "@material-ui/icons/StoreSharp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhotoIcon from "@material-ui/icons/Photo";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import ExpensPanel from "./SubSections/ExpensPanelSite.js";
import studio1 from "assets/img/examples/stripelog-min.jpg";

import work1 from "assets/img/examples/wordpress-min.png";
import work2 from "assets/img/examples/netlify-min.jpg";
import work4 from "assets/img/examples/joomla-min.png";

import prestashop from "assets/img/examples/prestashop-min.png";
import themewpedit from "assets/img/examples/themewpedit-min.jpg";
import prestashopedit from "assets/img/examples/prestashopedit-min.jpg";
import product from "assets/img/examples/product-min.jpg";
import visavuejs from "assets/img/examples/visa-min.jpg";

import logoex from "assets/img/examples/logoex-min.jpg";
import flyer from "assets/img/examples/flyer-min.jpg";
import carte from "assets/img/examples/carte-min.jpg";
import cartem from "assets/img/examples/cartem-min.jpg";
import flyerm from "assets/img/examples/flyersm-min.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const spacestyle = {
  paddingTop: "100px"
};

export default function ProductPage() {
  const classes = useStyles();

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div style={spacestyle}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div></div>
                <div id="graphic" className={classes.name}>
                  <h3 className={classes.title}>Ce que je peux vous offrir.</h3>
                  <h4>En tant que développeur web :</h4>
                  <h6>
                    Un grand choix de modèles que j{"'"}adapte en fonction de
                    votre projet.
                  </h6>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <p>Des sites deploiement avec les meilleurs générateurs actuels.</p>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Site",
                    tabIcon: WebSharpIcon,
                    tabContent: (
                      <GridContainer justify="center">
                        <ExpensPanel />
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "CMS",
                    tabIcon: AccountBoxIcon,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <a href="https://fredericbrodar.com/brodar/dev/">
                            <img
                              alt="wordpress"
                              src={work1}
                              className={navImageClasses}
                            />
                          </a>
                          <img
                            alt="editor"
                            src={themewpedit}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <a href="http://sms.exonet3i.com/fr/">
                            <img
                              alt="joomla"
                              src={work4}
                              className={navImageClasses}
                            />
                          </a>
                          <a href="https://www.netlify.com/">
                            <img
                              alt="netlify"
                              src={work2}
                              className={navImageClasses}
                            />
                          </a>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "E-commerce",
                    tabIcon: StoreSharpIcon,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <a href="https://dev.fredericbrodar.com/mstore/">
                            <img
                              alt="prestashop"
                              src={prestashop}
                              className={navImageClasses}
                            />
                          </a>
                          <img
                            alt="visa"
                            src={visavuejs}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="prestashop"
                            src={prestashopedit}
                            className={navImageClasses}
                          />
                          <img
                            alt="product"
                            src={product}
                            className={navImageClasses}
                          />
                          <img
                            alt="stripe"
                            src={studio1}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Graphisme",
                    tabIcon: PhotoIcon,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="carte"
                            src={carte}
                            className={navImageClasses}
                          />
                          <img
                            alt="flyer"
                            src={flyer}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="logo"
                            src={logoex}
                            className={navImageClasses}
                          />
                          <img
                            alt="carte1"
                            src={cartem}
                            className={navImageClasses}
                          />
                          <img
                            alt="flyer1"
                            src={flyerm}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
