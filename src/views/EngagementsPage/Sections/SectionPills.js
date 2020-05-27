import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image";
import CharteLoader from "./ButtonLoader/charte";
import CahierLoader from "./ButtonLoader/cahier";
import ContratLoader from "./ButtonLoader/contrat";
// @material-ui/icons
import GestureIcon from "@material-ui/icons/Gesture";
import PictureInPictureIcon from "@material-ui/icons/PictureInPicture";
import PaletteIcon from "@material-ui/icons/Palette";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import CreateIcon from "@material-ui/icons/Create";
import mockup from "assets/img/examples/mockup.jpg";
import mockup250 from "assets/img/examples/mockup250.jpg";
import wireframe250 from "assets/img/examples/wireframe250.jpg";
import wireframe400 from "assets/img/examples/wireframe400.jpg";
import wireframe from "assets/img/examples/wireframe500.jpg";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Les différentes phases.</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>Définitions des objectifs et des conformités.</small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Wireframe",
                    tabIcon: GestureIcon,
                    tabContent: (
                      <span>
                        <p>
                          Le <strong>wireframing</strong> est une étape
                          importante dans la création d’un site web sur mesure,
                          qui consiste à concevoir la maquette « fonctionnelle »
                          du site. A la différence d’un <strong>mockup</strong>,
                          un wireframe fait complètement abstraction de l’aspect
                          graphique et design du site, pour se concentrer sur
                          l’ergonomie. Une représentation sommaire de l{"'"}
                          application.
                        </p>
                        <br />
                        <GridItem xs={12}>
                          <ResponsiveImage>
                            <ResponsiveImageSize
                              default
                              minWidth={0}
                              path={wireframe250}
                            />
                            <ResponsiveImageSize
                              minWidth={768}
                              path={wireframe400}
                            />
                            <ResponsiveImageSize
                              minWidth={1100}
                              path={wireframe}
                            />
                          </ResponsiveImage>
                        </GridItem>
                      </span>
                    )
                  },
                  {
                    tabButton: "Mockup",
                    tabIcon: PictureInPictureIcon,
                    tabContent: (
                      <span>
                        <p>
                          Un <strong>mockup</strong> représente un squelette d
                          {"'"}une interface utilisateur. Une représentation
                          plus fidèle et plus fonctionnelle que le{" "}
                          <strong>Wireframe</strong>, notemment en ce qui
                          concerne l{"'"}aspect graphique, Il est nécessaire à
                          la phase de conception d{"'"}un site web.
                        </p>
                        <p>
                          Il permet de définir et d{"'"}avoir un aperçu des
                          divers éléments qui seront mis en place dans l{"'"}
                          application.
                        </p>
                        <GridItem xs={12}>
                          <ResponsiveImage>
                            <ResponsiveImageSize
                              default
                              minWidth={0}
                              path={mockup250}
                            />
                            <ResponsiveImageSize minWidth={768} path={mockup} />
                            <ResponsiveImageSize
                              minWidth={1100}
                              path={mockup}
                            />
                          </ResponsiveImage>
                        </GridItem>
                      </span>
                    )
                  },
                  {
                    tabButton: "Charte graphique",
                    tabIcon: PaletteIcon,
                    tabContent: (
                      <span>
                        <p>
                          A quoi sert une <strong>Charte graphique</strong> ?
                        </p>
                        <p>
                          <ul>
                            <li>
                              Servir les intérêts de la marque en termes de
                              qualité d{"'"}image.
                            </li>
                            <li>
                              Servir les intérêts des utilisateurs en termes de
                              confort de navigation, de prise d{"'"}
                              informations.
                            </li>
                            <li>
                              S{"'"}assurer d{"'"}une cohérence totale avec tous
                              les autres supports de communication de la marque.
                            </li>
                          </ul>
                        </p>
                        <br />
                        <p>
                          Les éléments à integrer sont : Le logo, la typo, les
                          couleurs, les icônes et les images. Ci-dessous un
                          exemple :
                        </p>
                        <br />
                        <CharteLoader />
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Cahier des charges",
                    tabIcon: LibraryBooksIcon,
                    tabContent: (
                      <span>
                        <p>
                          <strong>Le cahier des charges</strong> pour un site
                          internet va établir une description fonctionnelle des
                          différents éléments pour que les différentes parties
                          prenantes du projet soit sur la même longueur d’ondes.
                        </p>
                        <br />
                        <p>
                          <strong>
                            Les principaux éléments à intégrer dans le cahier
                            des charges sont :
                          </strong>
                          Le context, l{"'"}objectif, le perimetre, le
                          fonctionnement, les ressources, le budget, et le
                          delais.
                        </p>
                        <p>Exemple de cahier des charges :</p>
                        <br />
                        <CahierLoader />
                      </span>
                    )
                  },
                  {
                    tabButton: "Le contrat",
                    tabIcon: CreateIcon,
                    tabContent: (
                      <span>
                        <p>
                          <strong>Le contrat de création</strong> du site
                          internet doit être défini avec le plus de précision
                          possible et respecter le cahier des charges.
                        </p>
                        <br />
                        <p>
                          Toute utilisation de la création de l{"'"}auteur
                          devant faire l{"'"}objet d{"'"}une autorisation, la
                          stipulation relative à la propriété intellectuelle
                          prévoit le transfert de propriété de la création du
                          site internet au client. Exemple :
                        </p>
                        <br />
                        <ContratLoader />
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
