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
          <div className={classes.stitle}>
            <h4>SEO ou Search Engine Optimisation.</h4>
          </div>
          <p>
            Une bonne visibilité sur internet est fondamentale pour un site Web,
            le nombre de visiteurs dépend beaucoup de votre position sur les
            moteurs de recherche, ce paramètre est déterminant pour acquérir de
            nouveaux clients.
          </p>
        </div>
      </div>
      <SnackbarContent
        message={
          <span>
            <a href="https://marketingplatform.google.com/intl/fr/about/analytics/">
              <b>
                <strong>SEO - Google Analytics</strong>
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
        <div className={classes.title}>
          <p>
            Mais cela dépend des outils ainsi que l{"'"}on utilise, et l{"'"}
            usage que l{"'"}on en fait, pour ma part, deux points importants
            sont à considérer :
          </p>
          <div className={classes.list}>
            <li>
              Les moyens techniques pour améliorer le positionnement, métas,
              balises etc...
            </li>
            <li>
              Les méthodes d{"'"}analyse des données provenant du site internet,
              vitesse, visiteurs.
            </li>
          </div>
          <p>
            J{"'"}ai recherché et testé de nombreux outils d{"'"}analyse, j{"'"}
            ai sélectionné ceux qui pouvaient fonctionner de façon
            complémentaire, afin de recueillir le plus de données précises, car
            chaque outil a sa propre limite.
          </p>
        </div>
      </div>
    </div>
  );
}
