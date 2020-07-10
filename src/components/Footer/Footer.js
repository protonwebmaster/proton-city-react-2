/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import Social from "./Social";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
     <footer className={footerClasses}>
      <div className={classes.container}>
         <Social />
          <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://twitter.com/protonwebmaster"
                className={classes.block}
                target="_blank"
              >
                Twitter
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.protonwebmaster.site/projeqtor/view/main.php"
                className={classes.block}
                target="_blank"
              >
                Projeqtor
              </a>
            </ListItem>
            <Link to="prestations-page" className={classes.link}>
            <ListItem className={classes.inlineBlock}>
                  Connexion
                  </ListItem>
              </Link>
            <Link to="legale-page" className={classes.link}>
            <ListItem className={classes.inlineBlock}>
              <p
                className={classes.block}
                >
                Mentions legales
              </p>
            </ListItem>
            </Link>
          </List>
        </div>
       <div className={classes.right}><a href="tel:0644636004">Tel: 06.44.63.60.04 - </a>
           &copy; {1900 + new Date().getYear()} - protonwebmaster.com - ReactJs Website.       
       </div>
      </div>
   </footer>
  );
}
Footer.propTypes = {
  whiteFont: PropTypes.bool
};
