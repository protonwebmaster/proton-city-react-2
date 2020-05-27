/* eslint-disable react/no-unescaped-entities */
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import otketo from "assets/img/otketo.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/CicdStyle.js";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles(styles);

export default function SectionCicd() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <h6>
              L{"'"}avenir avec l{"'"}approche  CI/CD et Kubernetes.
            </h6>
            <p>
              Ce nouveau modèle CI/CD permet un retour utilisateur plus rapide,
              des délais de livraison plus courts et des coûts informatiques
              réduits. Ici, ce modèle est en au début, seulement les
              présentations catalogue, les démos en sont doté, pour une
              présentation en live flexible et rapide. CI/CD, ou Intégration
              Continue/Livraison et Déploiement Continu, met l{"'"}accent sur la
              mise en production rapide de petits changements incrémentiels et l
              {"'"}utilisation de l{"'"}
              automatisation tout au long du processus du développement. Dans le
              cadre de la distribution continue, les modifications apportées à
              une application sont automatiquement testées et téléchargées dans
              un référentiel <a href="https://github.com/">Github</a>, où elles
              peuvent être déployées dans un environnement de production actif.
              Le déploiement continu (l{"'"}
              autre signification possible de {"'"}CD{"'"}) peut désigner le
              transfert automatique des modifications du développeur depuis le
              référentiel vers l{"'"}environnement de production Netlify, où
              elles peuvent être utilisées par les clients.
            </p>
            <p>
              Un autre moyen complémentaire, le déploiement par
              containérisation, avec Kubernetes, nous avons adopté un outil de
              choix : Rancher, pour des déploiements en production automatisés
              sur nos serveurs. Ainsi que Okteto pour les CMS comme Wordpress en
              Caas, avec le CLI intégré.
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="prestations-page" className={classes.link}>
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <a href="https://wordpress-protonwebmaster.cloud.okteto.net/">
                  <img
                    src={otketo}
                    alt="netlify"
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                </a>
              </ScrollAnimation>
              <Button color="primary" size="lg" simple>
                Deploiement en continu avec Okteto.
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
