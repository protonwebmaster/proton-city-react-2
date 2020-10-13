import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Web from "@material-ui/icons/Web";
import DeveloperMode from "@material-ui/icons/DeveloperMode";
import Photo from "@material-ui/icons/Photo";
import GitHubIcon from "@material-ui/icons/GitHub";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import PhotoIcon from "@material-ui/icons/Photo";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Mes compétences</h2>
          <h3>
            Je suis développeur web et web mobile, webmaster et webdesigner.
          </h3>
          <h5 className={classes.description}>
            <a href="https://fredericbrodar.com">Autodidacte</a> dans le domaine
            du numérique depuis 2014, au cours de ces années je me suis formé
            dans le vaste domaine qu{"'"}est le numérique, en abordant les
            technologies innovantes qui se projettent dans un dans un avenir à
            long terme. En 2019, j{"'"}ai obtenu le Titre de développeur web et
            web mobile, un{" "}
            <strong>
              <a href="https://info.exonet3i.com/directweb/camw2-7u/BDD/index.php">
                challenge
              </a>
            </strong>
            , qui a été pour moi d{"'"}une grande importance.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Webmaster"
              description="Je développe votre identité numérique, votre projet personnel ou professionnel est sûr d'acquérir un grand potentiel avec les outils et les fournisseurs de service que j'ai choisi : Google Webmaster, Netlify, Rancher, et Cloudflare."
              icon={Web}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Développeur"
              description="J'utilise les principaux frameworks javascript et les outils comme Bootstrap et Materialize pour le développement de mes applications, Visual Studio code est mon outil favori."
              icon={DeveloperMode}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Webdesigner"
              description="Je met en place votre identité visuelle complète. Une étude sérieuse vous garanti la conformité de cette identité avec votre type d'activité. Avec le suite Adobe."
              icon={Photo}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <a href="https://www.netlify.com" className={classes.block}>
              <CloudDoneIcon fontSize="large" />
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <a
              href="https://github.com/protonwebmaster"
              className={classes.block}
            >
              <GitHubIcon fontSize="large" />
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <a
              href="https://www.adobe.com/fr/creativecloud.html"
              className={classes.block}
            >
              <PhotoIcon fontSize="large" />
            </a>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
