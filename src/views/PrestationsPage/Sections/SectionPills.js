import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import WebIcon from "@material-ui/icons/Web";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import AssessmentIcon from "@material-ui/icons/Assessment";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import whimsical from "assets/img/examples/whimsical-min.png";
import elate from "assets/img/examples/Elate-min.jpg";
import work1 from "assets/img/examples/wordpress-min.png";
import work4 from "assets/img/examples/joomla-min.png";
import chezmariesite from "assets/img/examples/chezmarie-site-min.jpg";
import chezmariestore from "assets/img/examples/chezmarie-min.jpg";
import mobileapp from "assets/img/examples/mobile-app-min.png";
import analytics from "assets/img/examples/analytics-min.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3 className={classes.centered}>...Et des solutions rapides.</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>Sites, CMS et E-commerce.</small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Sites",
                    tabIcon: WebIcon,
                    tabContent: (
                      <span>
                        <p>
                          Les technologies que j{"'"}utilise sont innovantes, et
                          repondent aux nouvelles éxigeances du Web, tant au
                          niveau de la performance que de la securité.
                          <br />
                          Je me sers des frameworks pour le développement de mes
                          applications : React.js et les langages courants : PHP
                          et Javascript pour le Backend.
                          <br />
                          Le début de chaque projet commence par la réalisation
                          d{"'"}une maquette avec un Wireframe et un Mockup, l
                          {"'"}établissement d{"'"}une charte graphique et un
                          cahier des charges.
                        </p>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <a
                              href="https://fr.wikipedia.org/wiki/Wireframe_(design)"
                              className={classes.block}
                            >
                              <img
                                src={whimsical}
                                alt="https://whimsical.com/"
                                className={
                                  classes.imgRaised +
                                  " " +
                                  classes.imgRounded +
                                  " " +
                                  classes.imgFluid
                                }
                              />
                            </a>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <a
                              href="https://proton-elate.onrender.com/"
                              className={classes.block}
                            >
                              <img
                                src={elate}
                                alt="https://gohugo.io/hosting-and-deployment/"
                                className={
                                  classes.imgRaised +
                                  " " +
                                  classes.imgRounded +
                                  " " +
                                  classes.imgFluid
                                }
                              />
                            </a>
                          </GridItem>
                        </GridContainer>
                      </span>
                    )
                  },
                  {
                    tabButton: "Cms",
                    tabIcon: AccountBoxIcon,
                    tabContent: (
                      <span>
                        <p>
                          Les CMS ou Content Management System, en français
                          Système de Gestion de Contenu, permet de générer des
                          pages, ajouter de nouveaux élements (medias) et de
                          gérer d{"'"}éventuels utilisateurs etc...
                          <br />
                          Je propose pour tout type de projets : Wordpress ou
                          Joomla. Ils peuvent être configuré comme des sites
                          E-commerce, forum etc...
                        </p>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <a
                              href="http://info.exonet3i.com/wp/wordpress/"
                              className={classes.block}
                            >
                              <img
                                src={work1}
                                alt="wordpress"
                                className={
                                  classes.imgRaised +
                                  " " +
                                  classes.imgRounded +
                                  " " +
                                  classes.imgFluid
                                }
                              />
                            </a>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <a
                              href="http://sms.exonet3i.com/fr/"
                              className={classes.block}
                            >
                              <img
                                src={work4}
                                alt="joomla"
                                className={
                                  classes.imgRaised +
                                  " " +
                                  classes.imgRounded +
                                  " " +
                                  classes.imgFluid
                                }
                              />
                            </a>
                          </GridItem>
                        </GridContainer>
                      </span>
                    )
                  },
                  {
                    tabButton: "E-commerce",
                    tabIcon: AddShoppingCartIcon,
                    tabContent: (
                      <span>
                        <p>
                          Pour les sites E-commerce je privilegie Prestashop,
                          qui présente une plus grande gratuite au niveau des
                          plugins. Mais d{"'"}autres solutions sont possibles
                          avec les CMS.
                          <br />
                          Les solutions de paiements que je propose, possèdent
                          une interface de gestion des ventes, et se dotent de
                          la securité 3D Secure.
                          <br />
                          Tous les sites sont en Https, et peuvent être installé
                          sur un hébergement mutulalisé ou sur une machine
                          virtuelle (VM).
                        </p>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <a
                              href="https://www.protonwebmaster.site/"
                              className={classes.block}
                            >
                              <img
                                src={chezmariesite}
                                alt="chez marie"
                                className={
                                  classes.imgRaised +
                                  " " +
                                  classes.imgRounded +
                                  " " +
                                  classes.imgFluid
                                }
                              />
                            </a>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <a
                              href="https://www.protonwebmaster.site/mstore/"
                              className={classes.block}
                            >
                              <img
                                src={chezmariestore}
                                alt="chez marie store"
                                className={
                                  classes.imgRaised +
                                  " " +
                                  classes.imgRounded +
                                  " " +
                                  classes.imgFluid
                                }
                              />
                            </a>
                          </GridItem>
                        </GridContainer>
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
                    tabButton: "Application mobile",
                    tabIcon: MobileFriendlyIcon,
                    tabContent: (
                      <span>
                        <p>
                          Une application mobile peut être crée en complément d
                          {"'"}un site internet. Une conception d{"'"}
                          application mobiles sous Android avec les Frameworks
                          Angular, React, ionic ou Framework7.
                          <br />
                          La publication sur Google Play Store permet de toucher
                          un autre type d{"'"}audiance, le suivit et la
                          maintenance sont compris dans la prestation.
                        </p>
                        <br />
                        <p>Une application en complément de votre site.</p>
                        <GridItem xs={12} sm={12} md={6}>
                          <a
                            href="https://f7b1-691a0.firebaseapp.com"
                            className={classes.block}
                          >
                            <img
                              src={mobileapp}
                              alt="ionic-angular"
                              className={
                                classes.imgRaised +
                                " " +
                                classes.imgRounded +
                                " " +
                                classes.imgFluid
                              }
                            />
                          </a>
                        </GridItem>
                      </span>
                    )
                  },
                  {
                    tabButton: "SEO",
                    tabIcon: AssessmentIcon,
                    tabContent: (
                      <span>
                        <p>Le SEO (Search Engine Optimization)</p>
                        <br />
                        <p>
                          <strong>Incontournable :</strong> La nécessité d{"'"}
                          avoir un positionnement adéquat sur Google pour être
                          vu et visité demande un paramètrage SEO avec des
                          outils de base de Google et les techniques d{"'"}
                          optimisation.
                        </p>
                        <br />
                        <p>
                          Analytics va vous permettre d’analyser le comportement
                          des internautes et de mesurer le retour de vos actions
                          webmarketing. Entre autres, il vous permet de suivre
                          en temps réel vos objectifs, le parcours des
                          internautes sur votre site, connaître votre taux de
                          rebond et le nombre de visiteurs (unique ou régulier)
                          qui viennent surfer sur votre site.
                        </p>
                        <GridItem xs={12} sm={12} md={6}>
                          <a
                            href="https://analytics.google.com"
                            className={classes.block}
                          >
                            <img
                              src={analytics}
                              alt="google analytics"
                              className={
                                classes.imgRaised +
                                " " +
                                classes.imgRounded +
                                " " +
                                classes.imgFluid
                              }
                            />
                          </a>
                        </GridItem>
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
