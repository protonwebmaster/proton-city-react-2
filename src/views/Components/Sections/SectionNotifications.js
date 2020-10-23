import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import BlinkLink from "./BlinkLink";
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
            avec de nouvelles expériences numériques. Nous sommes à l'écoute de vos attentes, afin de vous proposer des offres
            adaptées à vos besoins et à votre budget.
          </p>
        </div>
      </div>
      <SnackbarContent
        message={
          <span>
            <a href="https://dev.fredericbrodar.com/limesurvey/index.php/974242?newtest=Y">
              <b>
                <strong>Questionnaire en ligne</strong>
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
          <h5>Une meilleure collaboration.</h5>
          <p>
            Un service de qualité, avec des produits et des expériences numériques qui ont un impact
            durable pour votre entreprise, imagination et nouvelles technologies pour vous aider à vous développer dans cette voie.
            Chez nous le client est au centre des opérations, de la conception au développement à la réalisation. Cette collaboration est constante
            dans les diverses étapes d{"'"}un projet. Avec toute la puissance de la containerisation, la présentation et la disponibilité des
            démonstrations en live, n{"'"}a jamais été aussi efficace. Avec la culture DevOps, cette méthode de collaboration permet d{"'"}atteindre des d{"'"} objectifs
             commerciaux améliorés, ce qui améliore du même coup les rapports avec le client. Nos questionnaires en vue d'une étude préalable de vos exigeances,
              l{"'"}un simple et rapide ont été mis en place pour mieux vous connaître. Ainsi, au terme de l'un des questionnaires mis à votre disposition, et sur simple demande, 
              votre entreprise pourra être publiée dans l{"'"}
            <a
              href="https://dev.fredericbrodar.com/wp/wordpress/"
              target="parent"
            >
              <BlinkLink />
            </a>
          </p>
          <p>
            <a href="https://fredericbrodar.com">Des années d{"'"}expérience</a>{" "}
            on permit de découvrir, et de créer une directive autour de ce qu{"'"}on appelle le plus communément :{" "}
            <a href="http://www.open-source-guide.com/">L{"'"}open source</a>.
            Les capacités et les moyens dont on dispose actuellement, tournent autour de cet axe, dont les principales ressources se trouvent sur notre compte{" "}
            <a href="https://github.com/">Github</a>.
          </p>
          <p>
            Ce réservoir de créativité est une source inépuisable pour amorcer un projet avec un coût dérisoire, bien sûr cela ce place en complément des services qui y sont rattaché : les{" "}
            <a href="https://www.lebigdata.fr/definition-saas">SaaS</a>,{" "}
            <a href="https://www.redhat.com/fr/topics/cloud-computing/what-is-caas">
              Caas
            </a>{" "}
            et autres. Mais dans certains cas, pour certaines demandes spécifiques, les ressources qui sortent de cette gratuité s{"'"}avèrent être très utiles.
          </p>
          <p>
            Mais se tenir fortement dans cette direction, qui est aussi une méthode de travail, requière certaines qualités et compétences, une souplesse de raisonnement avec une adaptation technique. Bien sûr il
            est plus facile d{"'"}acheter un logiciel en lien, qui peut rendre le travail plus facile, mais les coûts pour l{"'"}utilisateur final sera plus élevé. Cette directive nous permet de vous proposer 
            un plus large éventail de solutions à des prix très compétitifs.
          </p>
          <h5>Mes nouveaux atouts.</h5>
          <p>
            Se doter de nouveaux outils représentatifs de la culture{" "}
            <a href="https://www.redhat.com/fr/topics/devops">DevOps</a>, ainsi que ceux de la méthode{" "}
            <a href="dev.fredericbrodar.com/pdf/13th-annual-state-of-agile-report.pdf">
              Agile
            </a>{" "}
            est un atout supplémentaire. Le client devient acteur dans les différentes opérations de conception.
          </p>
          <h5>Références et démonstrations.</h5>
          <p>
            Le site internet{" "}<a href="fredericbrodar.com">fredericbrodar.com</a> est un site statique, conçu pour la présentation de nouvelles applications, des besoins spécifiques en authentification et en solution de paiement est ici en démonstration, les différents tests et l{"'"}
            évaluation des coûts d{"'"}utilisation présente une garantie de fiabilité de ces produits.
          </p>
          <h5>Définir une stratégie de communication.</h5>
          <p>
            Etablir une stratégie de communication, de nos jours est primordial pour la survie de l{"'"}entreprise. De nouvelles idées permettent de développer des relations avec ses clients, ou avec des prospects:{" "}
            <a href="https://dev.protonwebmaster.com/">Protongame</a>, qui est en cours de création.
          </p>
          <p></p>
          <hr></hr>
        </div>
      </div>
      <GridContainer className={classes.textCenter} justify="center">
        <GridItem xs={12} sm={8} md={4}>
          <a href="https://dev.fredericbrodar.com/img/circleci.jpg">
            <img
              alt="devops"
              src="https://dev.fredericbrodar.com/img/circleci.jpg"
            />
          </a>
        </GridItem>
      </GridContainer>
    </div>
  );
}
