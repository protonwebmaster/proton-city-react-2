/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Login from "../../PrestationsPage/Sections/SectionLogin/App";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import { Link } from "react-router-dom";
import Blink from "./Blink";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import webtitan from "assets/img/webtitan-protonwebmaster-min.png";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <GridContainer className={classes.textCenter1} justify="center">
          <GridItem xs={12} sm={12} md={8}>
          <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
            <h2>Filtrage dns avancé</h2>
            <div className={classes.h4a}>           
              Un filtre web avancé qui offre aux entreprises, aux ESN et aux écoles du monde entier une protection contre les menaces de sécurité HTTP et HTTPS, ainsi qu’un contrôle avancé du filtrage DNS.
              <p>Cette solution multi-locataires offre une protection complète en temps réel contre les menaces en ligne grâce à un filtrage de contenu avancé et à une protection antivirus.</p>         
            </div>
            <div className={classes.webtitan}> 
            <a href="https://booking.myrezapp.com/fr/online/booking/minisite/10718/protonwebmaster">
                <img
                  src={webtitan}
                  alt="webtitan"
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </a>
              </div>
            <a href="https://booking.myrezapp.com/fr/online/booking/minisite/10718/protonwebmaster">
            <Button
              color="rose"
              size="lg"
              >
              Prendre un rendez-vous
            </Button>
            </a>
          </ScrollAnimation>
          </GridItem>        
        </GridContainer>
        <br />
        <GridContainer className={classes.textCenter1} justify="center">
          <GridItem xs={12} sm={12} md={8}>
          <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
            <h2>Accès sécurisé et gestion des identités</h2>
            <div className={classes.h4a}>
            L{"'"}API d{"'"}authentification <a href="https://developer.okta.com/">Okta</a> fournit des opérations pour 
            <Link to="protected" className={classes.link}><Blink /></Link>
            les utilisateurs, effectuer l{"'"}inscription et la
            vérification multifactorielle, récupérer les mots de passe oubliés et
            déverrouiller les comptes.<br />
            <a href="https://fredericbrodar.com/">
              Plus
            </a>
            </div>
            <Link to="prestations-page" className={classes.link}>
            <Button
              color="rose"
              size="lg"
              >
              Démo Connexion securisée
            </Button>
            </Link>
          </ScrollAnimation>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
              <Login />
            </GridItem>
        </GridContainer>
       </div>
    </div>
  );
}
