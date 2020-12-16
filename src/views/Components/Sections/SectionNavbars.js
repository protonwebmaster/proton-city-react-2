import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import logo from "assets/img/logo.png";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <Header
            brand="Protonwebmaster 06.59.91.02.70"
            color="info"
            fixed
            leftLinks={
              <GridItem>
                <a
                  href="https://www.protonwebmaster.com"
                  className={classes.block}
                >
                  <img alt="logo" src={logo} />{" "}
                </a>
              </GridItem>
            }
            rightLinks={
              <List className={classes.list}>
                <Link to="landing-page" className={classes.link}>
                  <ListItem className={classes.listItem}>
                    <Button
                      className={classes.navLink + " " + classes.navLinkActive}
                      active
                      color="transparent"
                    >
                      Parcours
                    </Button>
                  </ListItem>
                </Link>
                <Link to="prestations-page" className={classes.link}>
                  <ListItem className={classes.listItem}>
                    <Button
                      className={classes.navLink + " " + classes.navLinkActive}
                      active
                      color="transparent"
                    >
                      Prestations
                    </Button>
                  </ListItem>
                </Link>
                <Link to="engagements-page" className={classes.link}>
                  <ListItem className={classes.listItem}>
                    <Button
                      className={classes.navLink + " " + classes.navLinkActive}
                      active
                      color="transparent"
                    >
                      Engagements
                    </Button>
                  </ListItem>
                </Link>
                <Link to="devops-page" className={classes.link}>
                  <ListItem className={classes.listItem}>
                    <Button
                      className={classes.navLink + " " + classes.navLinkActive}
                      active
                      color="transparent"
                    >
                      Technologie
                    </Button>
                  </ListItem>
                </Link>
                <Link to="legale-page" className={classes.link}>
                  <ListItem className={classes.listItem}>
                    <Button
                      className={classes.navLink + " " + classes.navLinkActive}
                      active
                      color="transparent"
                    >
                      Mentions Légales
                    </Button>
                  </ListItem>
                </Link>
                <ListItem className={classes.listItem}>
                  <Button
                    className={classes.navLink + " " + classes.navLinkActive}
                    active
                    color="transparent"
                  >
                    <a href="https://dev.fredericbrodar.com/">
                      <strong>Dev</strong>
                    </a>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    className={classes.navLink + " " + classes.navLinkActive}
                    active
                    color="transparent"
                  >
                    <a href="https://dev.protonwebmaster.com">
                      <strong>Blog</strong>
                    </a>
                  </Button>
                </ListItem>
              </List>
            }
          />
        </GridContainer>
      </div>
    </div>
  );
}
