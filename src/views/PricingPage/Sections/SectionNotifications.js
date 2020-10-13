import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="notifications">
      <div className={classes.container}>
        <div className={classes.title}>
          <div className={classes.stitle}></div>
        </div>
      </div>
      <SnackbarContent
        message={
          <span>
            <a href="https://dev.fredericbrodar.com/limesurvey/index.php/974242?newtest=Y">
              <b>
                <strong>Quels sont vos besoins actuels ?</strong>
              </b>
            </a>
          </span>
        }
        close
        color="info"
        icon="info_outline"
      />
      <Clearfix />
      <div className={classes.container}>
        <div className={classes.title}></div>
      </div>
    </div>
  );
}
