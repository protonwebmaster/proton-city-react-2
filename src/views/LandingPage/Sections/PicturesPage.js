import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Link } from "react-router-dom";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import SectionCarousel from "./SectionCarousel.js";
import BlinkLink from "./BlinkLink";
import mongodb from "assets/img/pipedream-mongodb-min.jpg";

const useStyles = makeStyles(styles);

const spacestyle = {
  paddingTop: "100px"
};

export default function PicturesPage() {
  const classes = useStyles();
 
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div style={spacestyle}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div></div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Ce que je vous propose.</h3>
                  <h6>DESIGNER</h6>
                </div>
              </div>
            </GridItem>
          </GridContainer>         
          <div className={classes.description}>
            <p>Des solutions innovantes pour votre projet.</p>
          </div>
          <SectionCarousel />
          <GridContainer justify="center">
          <div className={classes.container}>
        <div className={classes.title}>
          <h5>Une meilleure collaboration.</h5>
          <p>
            Un service de qualité, avec des produits et des expériences
            numériques qui ont un impact durable pour votre entreprise,
            imagination et nouvelles technologies pour vous aider à vous
            développer dans cette voie. Chez nous le client est au centre des
            opérations, de la conception au développement à la réalisation.
            Cette collaboration est constante dans les diverses étapes d{"'"}un
            projet. Avec toute la puissance de la containerisation, la
            présentation et la disponibilité des démonstrations en live, n{"'"}a
            jamais été aussi efficace. Avec la culture DevOps, cette méthode de
            collaboration permet d{"'"}atteindre des d{"'"} objectifs
            commerciaux améliorés, ce qui améliore du même coup les rapports
            avec le client. Nos questionnaires en vue d{"'"}une étude préalable
            de vos exigeances, l{"'"}un simple et rapide ont été mis en place
            pour mieux vous connaître. Ainsi, au terme de l{"'"}un des
            questionnaires mis à votre disposition, et sur simple demande, votre
            entreprise pourra être publiée dans l{"'"}
            <a
              href="https://dev.fredericbrodar.com/wp/wordpress/"
              target="parent"
            >
              <BlinkLink />
            </a>
          </p>
          <p>
            <a href="https://fredericbrodar.com">Des années d{"'"}expérience</a>{" "}
            on permit de découvrir, et de créer une directive autour de ce qu
            {"'"}on appelle le plus communément :{" "}
            <a href="http://www.open-source-guide.com/">L{"'"}open source</a>.
            Les capacités et les moyens dont on dispose actuellement, tournent
            autour de cet axe, dont les principales ressources se trouvent sur
            notre compte <a href="https://github.com/">Github</a>.
          </p>
          <p>
            Ce réservoir de créativité est une source inépuisable pour amorcer
            un projet avec un coût dérisoire, bien sûr cela ce place en
            complément des services qui y sont rattaché : les{" "}
            <a href="https://www.lebigdata.fr/definition-saas">SaaS</a>,{" "}
            <a href="https://www.redhat.com/fr/topics/cloud-computing/what-is-caas">
              Caas
            </a>{" "}
            et autres. Mais dans certains cas, pour certaines demandes
            spécifiques, les ressources qui sortent de cette gratuité s{"'"}
            avèrent être très utiles.
          </p>
          <p>
            Mais se tenir fortement dans cette direction, qui est aussi une
            méthode de travail, requière certaines qualités et compétences, une
            souplesse de raisonnement avec une adaptation technique. Bien sûr il
            est plus facile d{"'"}acheter un logiciel en lien, qui peut rendre
            le travail plus facile, mais les coûts pour l{"'"}utilisateur final
            sera plus élevé. Cette directive nous permet de vous proposer un
            plus large éventail de solutions à des prix très compétitifs.
          </p>
          <h5>Mes nouveaux atouts.</h5>
          <p>
            Se doter de nouveaux outils représentatifs de la culture{" "}
            <a href="https://www.redhat.com/fr/topics/devops">DevOps</a>, ainsi
            que ceux de la méthode{" "}
            <a href="dev.fredericbrodar.com/pdf/13th-annual-state-of-agile-report.pdf">
              Agile
            </a>{" "}
            est un atout supplémentaire. Le client devient acteur dans les
            différentes opérations de conception.
          </p>
          <p>
            Déploiement continu avec <a href="https://circleci.com/">CicleCI</a>{" "}
            et{" "}
            <a href="https://docs.netlify.com/configure-builds/get-started/">
              Netlify
            </a>
            :
          </p>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={8} md={4}>
              <a href="https://dev.fredericbrodar.com/img/circleci.jpg">
                <img
                  alt="circleci"
                  src="https://dev.fredericbrodar.com/img/circleci.jpg"
                />
              </a>
            </GridItem>
            <GridItem xs={12} sm={8} md={4}>
              <a href="https://dev.fredericbrodar.com/img/netlify.jpg">
                <img
                  alt="netlify"
                  src="https://dev.fredericbrodar.com/img/netlify.jpg"
                />
              </a>
            </GridItem>
          </GridContainer>
          <h5>Références et démonstrations.</h5>
          <p>
            Le site internet <a href="fredericbrodar.com">fredericbrodar.com</a>{" "}
            est un site statique, conçu pour la présentation de nouvelles
            applications, des besoins spécifiques en authentification et en
            solution de paiement est ici en démonstration, les différents tests
            et l{"'"}
            évaluation des coûts d{"'"}utilisation présente une garantie de
            fiabilité de ces produits.
          </p>
          <ul>
            <li>
              <a href="https://fredericbrodar.com/#auth">
                GIA ou Gestion des Identités ( Avec ou sans mot de passe ).
              </a>
            </li>
            <li>
              <a href="https://fredericbrodar.com/#tech">
                Intégration Stripe sur tous les types de site.
              </a>
            </li>
          </ul>
          <h5>Définir une stratégie de communication.</h5>
          <p>
            Etablir une stratégie de communication, de nos jours est primordial
            pour la survie de l{"'"}entreprise. De nouvelles idées permettent de
            développer des relations avec ses clients, ou avec des prospects:{" "}
            <a href="https://fredericbrodar.com/protongame/">Protongame</a>.
          </p>
          <p>
            L{"'"}expérience utilisateur (UX) permet d{"'"}envisager une
            dimension plus grande dans la recherche de prospects, avec l{"'"}
            utilisation d{"'"}une application qui fait interagir le visiteur.
            <a href="https://fredericbrodar.com/protongame/"> Protongame</a> est
            un jeu de hasard très simple, l{"'"}utilisateur en cas de victoire
            gagne une importante remise sur nos
            <Link to="prestations-page" className={classes.link}>
              {" "}
              produits
            </Link>
            . Cette application est suivie par une analytique précise, une
            intégration <a href="https://segment.com/docs/">segment</a> avec une
            connexion <a href="https://pipedream.com/">pipedream</a> pour
            collecter des informations relatives à cette expérience utilisateur.
            Ces informations peuvent être stockées dans une base de données tel
            que
            <a href="https://www.mongodb.com/"> mongodb</a>.
          </p>
          <hr></hr>

          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={8} md={4}>
              <div>
                <a href="https://dev.fredericbrodar.com/img/pipedream.jpg">
                  <img
                    alt="pipedream"
                    src="https://dev.fredericbrodar.com/img/pipedream.jpg"
                  />
                </a>
              </div>
            </GridItem>
            <GridItem xs={12} sm={8} md={4}>
              <a href="https://dev.fredericbrodar.com/img/pipedream-mongodb.jpg">
                <img src={mongodb} alt="mongodb" />
              </a>
            </GridItem>
          </GridContainer>
          <p>
            <a href="https://fredericbrodar.com/protongame/">Protongame</a> est
            une application {"'"}Call-to-action{"'"}.{" "}
            <a href="https://fr.sendinblue.com/blog/call-to-action-exemples-bonnes-pratiques/">
              Un call-to-action (CTA)
            </a>{" "}
            se traduit en français par Bouton d{"'"}incitation à l{"'"}action.
            Il est essentiel dans la transformation de votre audience en lead,
            ou autrement dit, d{"'"}un visiteur inconnu à un prospect qualifié.
            Il détient une place centrale dans une stratégie d{"'"}Inbound
            Marketing. Bien sûr il faudra un peu d’imagination, pour mettre en
            place cette stratégie, moi j{"'"}ai pensé à un simple jeu de hasard,
            qui va permettre au candidat de gagner quelque chose en rapport avec
            ce que l{"'"}on vend d’habitude, dans mon cas le produit le plus
            courant est une site internet avec une remise importante.
          </p>
        </div>
      </div>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
