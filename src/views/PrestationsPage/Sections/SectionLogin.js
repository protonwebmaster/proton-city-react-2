import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Login from "./SectionLogin/App";
import styles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="notifications">
      <div className={classes.container}>
        <div className={classes.title}>
          <div className={classes.stitle}>
            <h4>Connexion securisée et identification.</h4>
          </div>
          <p>
            L{"'"}API d{"'"}authentification Okta fournit des opérations pour
            authentifier les utilisateurs, effectuer l{"'"}inscription et la
            vérification multifactorielle, récupérer les mots de passe oubliés
            et déverrouiller les comptes.
          </p>
          <p>
            Cette authentification peut être utilisée comme une API autonome
            pour fournir la couche d{"'"}identité au-dessus de votre application
            existante, ou il peut être intégré à l{"'"}API Okta Sessions pour
            obtenir un cookie de session Okta et accéder aux applications au
            sein d{"'"}Okta.
          </p>
          <p>
            L{"'"}authentification principale vous permet de vérifier les
            informations d{"'"}identification du nom d{"'"}utilisateur et du mot
            de passe pour un utilisateur.
          </p>
          <p>
            L{"'"}authentification multifacteur (MFA) renforce la sécurité de l
            {"'"}authentification par mot de passe en exigeant une vérification
            supplémentaire d{"'"}un autre facteur tel qu{"'"}un mot de passe à
            usage unique temporaire ou un code d{"'"}accès SMS.  L{"'"}API d
            {"'"}authentification prend en charge l{"'"}inscription des
            utilisateurs avec des facteurs MFA activés par l{"'"}administrateur,
            ainsi que des défis MFA basés sur votre politique de connexion Okta.
          </p>
          <p>
            La récupération permet aux utilisateurs de réinitialiser leur mot de
            passe en toute sécurité s{"'"}ils l{"'"}ont oublié, ou de
            déverrouiller leur compte s{"'"}il a été verrouillé en raison de
            tentatives de connexion infructueuses.  Cette fonctionnalité est
            soumise à la politique de sécurité définie par l{"'"}administrateur.
          </p>
          <p>
            L{"'"}API d{"'"}authentification mis en place dans une application 
            fournit des opérations pour authentifier les utilisateurs, effectuer
            l{"'"}inscription et la vérification multifactorielle, récupérer les
            mots de passe oubliés et déverrouiller les comptes. Gérer la
            validité des mot de passes. Utilise en Api Autonome ou en api
            session :
          </p>
        </div>
        <div className={classes.list}>
          <li>
            L{"'"}authentification principale vous permet de vérifier les
            informations d{"'"}identification.
          </li>
          <li>
            L{"'"}authentification multifacteur (MFA) renforce la sécurité de L
            {"'"}authentification. 
          </li>
          <li>
            La récupération du mot de passe, réinitialiser ou déverrouillé. 
          </li>
        </div>
      </div>
      <GridContainer className={classes.textCenter} justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <p>Identification et contrôle des inscriptions.</p>
          <Login />
        </GridItem>
        <GridItem xs={12} sm={8} md={6}></GridItem>
      </GridContainer>
    </div>
  );
}
