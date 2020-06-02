import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import WebSharpIcon from "@material-ui/icons/WebSharp";
import StoreSharpIcon from "@material-ui/icons/StoreSharp";
import SettingsApplicationsSharpIcon from "@material-ui/icons/SettingsApplicationsSharp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import studio1 from "assets/img/examples/site-min.png";
import studio2 from "assets/img/examples/login-min.png";
import studio3 from "assets/img/examples/seo-min.png";
import studio4 from "assets/img/examples/ssl-min.png";
import studio5 from "assets/img/examples/database-min.png";
import work1 from "assets/img/examples/prestashop-min.png";
import work2 from "assets/img/examples/csv-min.png";
import work3 from "assets/img/examples/woo-min.png";
import work4 from "assets/img/examples/stripelogo-min.png";
import work5 from "assets/img/examples/visa-min.png";
import paypal from "assets/img/examples/paypal-min.png";
import security from "assets/img/examples/security-min.png";
import dns from "assets/img/examples/dns-min.png";
import skype from "assets/img/examples/skype-min.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const spacestyle = {
  paddingTop: "100px"
};

export default function PicturesPage() {
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
                <div className={classes.name}>
                  <h3 className={classes.title}>Ce que je sais faire.</h3>
                  <h6>DESIGNER</h6>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <p>Des solutions innovantes pour votre projet.</p>
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
                        <GridItem xs={12} sm={12} md={4}>
                          <a href="https://www.protonwebmaster.site/">
                            <img
                              alt="ChezMarie"
                              src={studio1}
                              className={navImageClasses}
                            />
                          </a>
                          <img
                            alt="..."
                            src={studio2}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={studio5}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={studio4}
                            className={navImageClasses}
                          />
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
                          <a href="https://www.protonwebmaster.site/mstore/index.php?">
                            <img
                              alt="Store"
                              src={work1}
                              className={navImageClasses}
                            />
                          </a>
                          <img
                            alt="..."
                            src={work2}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work3}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={work4}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work5}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={paypal}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Service",
                    tabIcon: SettingsApplicationsSharpIcon,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={security}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={studio3}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={dns}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={skype}
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
