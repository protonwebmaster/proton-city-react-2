import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import FacebookLike from "./FacebookLike";
import styles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="notifications">
      <div className={classes.container}>
        <div className={classes.title}>
          <div className={classes.stitle}>
            <h4>Des Solutions Web innovantes.</h4>
          </div>
          <p>
            Un nouveau souffle pour votre entreprise : Créativité et innovation,
            avec de nouvelles expériences numériques. Nous sommes à l{"'"}écoute
            de vos attentes, afin de vous proposer des offres adaptées à vos
            besoins et à votre budget.
          </p>
        </div>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={8} md={4}>
            <div className={classes.img4a}>
              <p>
                Pourquoi à t{"'"}on besoin aujourd{"'"}hui d{"'"}un site
                internet ?
              </p>
              <p>
                Le site internet représente la référence de l{"'"}Entreprise, il
                est une composante essentielle de la stratégie de communication.
                La crise du sanitaire du Covid a fait naître un autre
                environnement de travail, et une autre nécessité est apparue:
                adapter l{"'"}entreprise pour qu{"'"}elle survive.
              </p>
              <p>
                L{"'"}ère du numérique doit être entièrement intégrée dans les
                moyens mis en oeuvre pour la réussite d{"'"}un projet.
              </p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={8} md={4}>
            <div className={classes.img4a}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/uvCKTAZA0Gw?start=5"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="video"
              />
            </div>
            <p>
              Propulsez votre entreprise dans l{"'"}ère du numérique avec
              Protonwebmaster.
            </p>
            <FacebookLike />
          </GridItem>
        </GridContainer>
      </div>
      <SnackbarContent
        message={
          <span>
            <a href="https://dev.protonwebmaster.com/">
              <b>
                <strong>
                  Commerçants : aide de 500 euros pour la création d’un site
                  Internet
                </strong>
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
          <h5>Frédéric Brodar, je suis votre webmaster freelance,</h5>
          <p>
            basé à Rians (18) mais également disponible pour vos projets à
            distance. Développeur web, j{"'"}ai acquis, une certaine expériences
            dans le domaine numérique et plus particulièrement dans les
            nouvelles technologies.
          </p>
          <p>
            Je vous propose des solutions modernes et adéquates pour votre
            projet, et cela, en fonction de votre besoin et de votre budget. J
            {"'"}accorde une grande importance aux échanges et à la
            collaboration. Ainsi, je vous accompagne et vous conseille afin de
            booster votre visibilité sur le web et ainsi développer votre
            activité.
          </p>
          <Link to="landing-page" className={classes.link}>
            <p>Parcours et démonstrations {">>"}</p>
          </Link>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
