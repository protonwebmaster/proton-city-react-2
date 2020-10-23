import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GavelIcon from "@material-ui/icons/Gavel";
import WarningIcon from "@material-ui/icons/Warning";
import BusinessIcon from "@material-ui/icons/Business";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import CgvLoader from "./ButtonLoader/cgv";
import logo from "assets/img/logo-protonwebmaster.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Mentions légales / C.G.U. / C.G.V.</h3>
          </div>
          <div className={classes.title}></div>
          <GridContainer>
            <GridItem xs={12}>
              <NavPills
                color="danger"
                tabs={[
                  {
                    tabButton: "Mentions légales",
                    tabIcon: GavelIcon,
                    tabContent: (
                      <span>
                        <h4>1. PRÉSENTATION DU SITE.</h4>
                        <p>Protonwebmaster - Frédéric BRODAR.</p>
                        <p>
                          En vertu de l{"'"}article 6 de la loi n° 2004-575 du
                          21 juin 2004 pour la confiance dans l{"'"}économie
                          numérique, il est précisé aux utilisateurs du site
                          https://www.protonwebmaster.com/ l{"'"}identité des
                          différents intervenants dans le cadre de sa
                          réalisation et de son suivi :
                        </p>
                        <br />
                        <p>
                          Propriétaire : Protonwebmaster - Créateur : BRODAR
                          Frédéric - Responsable publication : Protonwebmaster –
                          webmst[@]Protonwebmaster[point]com Le responsable
                          publication est une personne physique ou une personne
                          morale. Webmaster : BRODAR Frédéric –
                          protonwebmaster.info[@]gmail[point]com
                        </p>
                        <p>
                          Hébergement:{" "}
                          <a href="https://www.netlify.com">Netlify</a>
                        </p>
                        <br />
                        <h4>2. DESCRIPTION DES SERVICES FOURNIS.</h4>
                        <p>
                          Le site https://www.protonwebmaster.com/ a pour objet
                          de fournir une information concernant l’ensemble des
                          activités de la société.
                        </p>
                        <p>
                          Protonwebmaster s’éfforce de fournir sur le site
                          https://www.protonwebmaster.com/ des informations
                          aussi précises que possible. Toutefois, il ne pourra
                          être tenue responsable des omissions, des
                          inexactitudes et des carences dans la mise à jour,
                          qu’elles soient de son fait ou du fait des tiers
                          partenaires qui lui fournissent ces informations.
                        </p>
                        <p>
                          Tous les informations indiquées sur le site
                          https://www.protonwebmaster.com/ sont données à titre
                          indicatif, et sont susceptibles d’évoluer. Par
                          ailleurs, les renseignements figurant sur le site
                          https://www.protonwebmaster.com/ ne sont pas
                          exhaustifs. Ils sont donnés sous réserve de
                          modifications ayant été apportées depuis leur mise en
                          ligne.
                        </p>
                        <h5>Logo officiel :</h5>
                        <img
                          src={logo}
                          alt="logo"
                          className={
                            classes.imgRaised +
                            " " +
                            classes.imgRounded +
                            " " +
                            classes.imgFluid
                          }
                        />
                      </span>
                    )
                  },
                  {
                    tabButton: "C.G.U.",
                    tabIcon: WarningIcon,
                    tabContent: (
                      <span>
                        <h4>
                          1. CONDITIONS GÉNÉRALES D’UTILISATION DU SITE ET DES
                          SERVICES PROPOSÉS.
                        </h4>
                        <p>
                          L’utilisation du site https://www.protonwebmaster.com/
                          implique l’acceptation pleine et entière des
                          conditions générales d’utilisation ci-après décrites.
                          Ces conditions d’utilisation sont susceptibles d’être
                          modifiées ou complétées à tout moment, les
                          utilisateurs du site https://www.protonwebmaster.com/
                          sont donc invités à les consulter de manière
                          régulière.
                        </p>
                        <h4>
                          2. LIMITATIONS CONTRACTUELLES SUR LES DONNÉES
                          TECHNIQUES.
                        </h4>
                        <p>
                          Le site utilise la technologie JavaScript. Le site
                          Internet ne pourra être tenu responsable de dommages
                          matériels liés à l’utilisation du site. De plus,
                          l’utilisateur du site s’engage à accéder au site en
                          utilisant un matériel récent, ne contenant pas de
                          virus et avec un navigateur de dernière génération
                          mis-à-jour.
                        </p>
                        <br />
                        <h4>3. PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS.</h4>
                        <p>
                          Protonwebmaster est propriétaire des droits de
                          propriété intellectuelle ou détient les droits d’usage
                          sur tous les éléments accessibles sur le site,
                          notamment les textes, images, graphismes, logo,
                          icônes, sons, logiciels. Toute reproduction,
                          représentation, modification, publication, adaptation
                          de tout ou partie des éléments du site, quel que soit
                          le moyen ou le procédé utilisé, est interdite, sauf
                          autorisation écrite préalable de : Protonwebmaster.
                          Chaque Utilisateur s{"'"}engage expressément : • à ne
                          pas utiliser de logiciels ou de procédés destiné à
                          copier le contenu du Site sans l{"'"}autorisation
                          expresse et préalable de Protonwebmaster • à renoncer
                          expressément à utiliser des logiciels ou dispositifs
                          susceptibles de perturber le bon fonctionnement du
                          Site, ni à engager d{"'"}action de nature à imposer
                          une charge disproportionnée pour les infrastructures
                          de Protonwebmaster • à ne pas altérer ou modifier
                          voire créer des œuvres dérivées à partir du contenu du
                          Site sans le consentement exprès et préalable de
                          Protonwebmaster.• à accepter les caractéristiques et
                          les limites de l{"'"}Internet, et en particulier
                          reconnaître que : - l{"'"}utilisation du Site se fait
                          à ses risques et périls ; le Site lui est accessible «
                          en l{"'"}état » et en fonction de sa disponibilité ; -
                          la protection de ses propres données et/ou logiciels
                          lui incombe et il lui appartient de prendre toutes les
                          mesures appropriées de façon à les protéger des
                          éventuels virus circulant sur le Site; - les
                          performances techniques de l{"'"}Internet requièrent
                          un temps de traitement nécessaire pour répondre,
                          consulter, interroger ou transférer le contenu du
                          Site; • à ne pas recopier tout ou partie du Site sur
                          un autre site ou un réseau interne à l{"'"}
                          entreprise ; • à ne pas extraire ou réutiliser, y
                          compris à des fins privées, sans autorisation écrite
                          et préalable de Protonwebmaster, une partie
                          substantielle ou non du contenu des bases de données
                          et archives constituées par le Site; • à ne pas
                          collecter des informations sur des tiers, y compris
                          les adresses électroniques, afin de les utiliser pour
                          l{"'"}envoi de sollicitations commerciales ou
                          équivalentes, ou de les intégrer au sein d{"'"}un
                          service de référencement ou équivalent, gratuit ou
                          payant, ou encore afin d{"'"}effectuer une veille
                          concurrentielle. • à mettre en place des systèmes
                          susceptibles ou de nature à pirater le Site en tout ou
                          partie, ou de nature à violer les présentes CGU ; • à
                          informer Protonwebmaster dès la connaissance d{"'"}un
                          piratage et en particulier de toute utilisation
                          illicite ou non contractuelle du contenu du Site et
                          ce, quel que soit le mode de diffusion utilisé. Toute
                          exploitation non autorisée du site ou de l’un
                          quelconque des éléments qu’il contient sera considérée
                          comme constitutive d’une contrefaçon et poursuivie
                          conformément aux dispositions des articles L.335-2 et
                          suivants du Code de Propriété Intellectuelle. Et
                          notamment tout cas de piratage relatif au site
                          https://www.protonwebmaster.com/, des poursuites
                          seront engagées selon les lois en vigueur en France et
                          conformément aux dispositions des articles : Article
                          323-1 - Article 323-3 du code pénal.
                        </p>
                        <br />
                        <h4>4. LIMITATIONS DE RESPONSABILITÉ.</h4>
                        <p>
                          Protonwebmaster ne pourra être tenue responsable des
                          dommages directs et indirects causés au matériel de
                          l’utilisateur, lors de l’accès au site
                          https://www.protonwebmaster.com/, et résultant soit de
                          l’utilisation d’un matériel ne répondant pas aux
                          spécifications indiquées au point 4, soit de
                          l’apparition d’un bug ou d’une incompatibilité.
                          Protonwebmaster ne pourra également être tenue
                          responsable des dommages indirects (tels par exemple
                          qu’une perte de marché ou perte d’une chance)
                          consécutifs à l’utilisation du site
                          https://www.protonwebmaster.com/. Une page {"'"}
                          contact{"'"}, accessible par le menu
                          {"'"}contact{"'"} (possibilité de poster un message
                          dans le formulaire contact) sont à la disposition des
                          utilisateurs. Protonwebmaster se réserve le droit d
                          {"'"}
                          engager des poursuites judiciaires, sans mise en
                          demeure préalable, pour tout abus concernant les
                          données envoyées par ce procédé ou par tout autre
                          moyen, et en général, pour tout contenu déposé dans
                          cet espace qui contreviendrait à la législation
                          applicable en France, en particulier aux dispositions
                          relatives à la protection des données, le Spam tel que
                          décris dans la loi n° 2004-575 du 21 juin 2004 et
                          suivant L{"'"}article 22 (codifié L. 33-4-1 dans le
                          code des postes et des communications électroniques).
                          Le cas échéant, Protonwebmaster se réserve également
                          la possibilité de mettre en cause la responsabilité
                          civile et/ou pénale de l{"'"}utilisateur, notamment en
                          cas de message à caractère raciste, injurieux,
                          diffamant, ou pornographique, quel que soit le support
                          utilisé (texte, photographie…).
                        </p>
                        <br />
                        <h4>5. GESTION DES DONNÉES PERSONNELLES.</h4>
                        <p>
                          En France, les données personnelles sont notamment
                          protégées par la loi n° 78-87 du 6 janvier 1978, la
                          loi n° 2004-801 du 6 août 2004, l{"'"}article L.
                          226-13 du Code pénal et la Directive Européenne du 24
                          octobre 1995. A l{"'"}occasion de l{"'"}utilisation du
                          site https://www.protonwebmaster.com/, peuvent êtres
                          recueillies : l{"'"}URL des liens par l{"'"}
                          intermédiaire desquels l{"'"}utilisateur a accédé au
                          site https://www.protonwebmaster.com/, le fournisseur
                          d{"'"}
                          accès de l{"'"}utilisateur, l{"'"}adresse de protocole
                          Internet (IP) de l{"'"}utilisateur. En tout état de
                          cause Protonwebmaster ne collecte des informations
                          personnelles relatives à l{"'"}utilisateur que pour le
                          besoin de certains services proposés par le site
                          https://www.protonwebmaster.com/. L{"'"}utilisateur
                          fournit ces informations en toute connaissance de
                          cause, notamment lorsqu{"'"}il procède par lui-même à
                          leur saisie. Il est alors précisé à l{"'"}utilisateur
                          du site https://www.protonwebmaster.com/l’obligation
                          ou non de fournir ces informations. Conformément aux
                          dispositions des articles 38 et suivants de la loi
                          78-17 du 6 janvier 1978 relative à l{"'"}informatique,
                          aux fichiers et aux libertés, tout utilisateur dispose
                          d’un droit d’accès, de rectification et d’opposition
                          aux données personnelles le concernant, en effectuant
                          sa demande écrite et signée, accompagnée d’une copie
                          du titre d’identité avec signature du titulaire de la
                          pièce, en précisant l{"'"}adresse à laquelle la
                          réponse doit être envoyée. Aucune information
                          personnelle de l{"'"}utilisateur du site
                          https://www.protonwebmaster.com/ n{"'"}est publiée à l
                          {"'"}
                          insu de l{"'"}utilisateur, échangée, transférée, cédée
                          ou vendue sur un support quelconque à des tiers. Seule
                          l{"'"}hypothèse du rachat de Protonwebmaster et de ses
                          droits permettrait la transmission des dites
                          informations à l{"'"}éventuel acquéreur qui serait à
                          son tour tenu de la même obligation de conservation et
                          de modification des données vis à vis de l{"'"}
                          utilisateur du site https://www.protonwebmaster.com/.
                          Le site n{"'"}est pas déclaré à la CNIL car il ne
                          recueille pas d{"'"}
                          informations personnelles. Les bases de données sont
                          protégées par les dispositions de la loi du 1er
                          juillet 1998 transposant la directive 96/9 du 11 mars
                          1996 relative à la protection juridique des bases de
                          données.
                        </p>
                        <br />
                        <h4>6. LIENS HYPERTEXTES ET COOKIES.</h4>
                        <p>
                          Le site https://www.protonwebmaster.com/contient un
                          certain nombre de liens hypertextes vers d’autres
                          sites, mis en place avec l{"'"}autorisation de
                          Protonwebmaster. Cependant, Protonwebmaster n’a pas la
                          possibilité de vérifier le contenu des sites ainsi
                          visités, et n’assumera en conséquence aucune
                          responsabilité de ce fait. La navigation sur le site
                          https://www.protonwebmaster.com/ est susceptible de
                          provoquer l’installation de cookie(s) sur l’ordinateur
                          de l’utilisateur. Un cookie est un fichier de petite
                          taille, qui ne permet pas l’identification de
                          l’utilisateur, mais qui enregistre des informations
                          relatives à la navigation d’un ordinateur sur un site.
                          Les données ainsi obtenues visent à faciliter la
                          navigation ultérieure sur le site, et ont également
                          vocation à permettre diverses mesures de
                          fréquentation. Ce site utilise Google Analytics, un
                          service d{"'"}analyse de site Internet fourni par
                          Google Inc. (« Google »). : Google Analytics utilise
                          des cookies internes permettant de générer des
                          rapports sur les interactions des utilisateurs avec
                          les sites Web des clients Google Analytics. Ces
                          cookies sont utilisés pour stocker des informations ne
                          permettant pas d{"'"}identifier personnellement les
                          internautes. Les cookies internes stockés dans les
                          navigateurs ne sont pas valables d{"'"}un domaine à l
                          {"'"}autre. des cookies publicitaires sont utilisés
                          afin d{"'"}activer certaines fonctionnalités telles
                          que le remarketing pour des produits comme AdWords sur
                          le Réseau Display de Google. Pour plus d{"'"}
                          informations sur la manière dont Google utilise ces
                          cookies publicitaires, consultez la FAQ sur la
                          confidentialité en matière de publicité de Google. Le
                          paramétrage de votre logiciel de navigation permet d
                          {"'"}informer de la présence de cookies et
                          éventuellement de la refuser selon la procédure
                          décrite à l{"'"}adresse suivante : www.cnil.fr . Le
                          refus d’installation d’un cookie peut entraîner l{"'"}
                          impossibilité d’accéder à certains services. L{"'"}
                          utilisateur peut toutefois configurer son ordinateur
                          de la manière suivante, pour refuser l’installation
                          des cookies : Sous Internet Explorer : onglet outil
                          (pictogramme en forme de rouage en haut a droite) /
                          options internet. Cliquez sur Confidentialité et
                          choisissez Bloquer tous les cookies. Validez sur Ok.
                          Sous Firefox : en haut de la fenêtre du navigateur,
                          cliquez sur le bouton Firefox, puis aller dans l{"'"}
                          onglet Options. Cliquer sur l{"'"}onglet Vie privée.
                          Paramétrez les Règles de conservation sur : utiliser
                          les paramètres personnalisés pour l{"'"}historique.
                          Enfin décochez-la pour désactiver les cookies. Sous
                          Safari : Cliquez en haut à droite du navigateur sur le
                          pictogramme de menu (symbolisé par un rouage).
                          Sélectionnez Paramètres. Cliquez sur Afficher les
                          paramètres avancés. Dans la section {"'"}
                          Confidentialité{"'"}, cliquez sur Paramètres de
                          contenu. Dans la section {"'"}Cookies{"'"}, vous
                          pouvez bloquer les cookies. Sous Chrome : Cliquez en
                          haut à droite du navigateur sur le pictogramme de menu
                          (symbolisé par trois lignes horizontales).
                          Sélectionnez Paramètres. Cliquez sur Afficher les
                          paramètres avancés. Dans la section {"'"}
                          Confidentialité{"'"}, cliquez sur préférences. Dans l
                          {"'"}onglet {"'"}
                          Confidentialité{"'"}, vous pouvez bloquer les cookies.
                        </p>
                        <br />
                        <h4>
                          7. DROIT APPLICABLE ET ATTRIBUTION DE JURIDICTION.
                        </h4>
                        <p>
                          Tout litige en relation avec l’utilisation du site
                          https://www.protonwebmaster.com/ est soumis au droit
                          français. Il est fait attribution exclusive de
                          juridiction aux tribunaux compétents de Paris.
                        </p>
                        <br />
                        <h4>8. LES PRINCIPALES LOIS CONCERNÉES.</h4>
                        <p>
                          Loi n° 78-87 du 6 janvier 1978, notamment modifiée par
                          la loi n° 2004-801 du 6 août 2004 relative à l{"'"}
                          informatique, aux fichiers et aux libertés. Loi n°
                          2004-575 du 21 juin 2004 pour la confiance dans l{"'"}
                          économie numérique.
                        </p>
                        <br />
                        <h4>9. LEXIQUE.</h4>
                        <p>
                          Utilisateur : Internaute se connectant, utilisant le
                          site susnommé. Informations personnelles : « les
                          informations qui permettent, sous quelque forme que ce
                          soit, directement ou non, l{"'"}identification des
                          personnes physiques auxquelles elles s{"'"}appliquent
                          » (article 4 de la loi n° 78-17 du 6 janvier 1978).
                          Nous remercions les utilisateurs du site de nous faire
                          part d{"'"}éventuelles omissions, erreurs,
                          corrections, en remplissant le formulaire de contact.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "C.G.V.",
                    tabIcon: BusinessIcon,
                    tabContent: (
                      <span>
                        <h4>
                          <strong>
                            Conditions générales de vente ( Aperçu )
                          </strong>
                        </h4>
                        <h5>
                          Toutes commandes transmises à Protonwebmaster
                          impliquent de la part de l{"'"}Acheteur l{"'"}
                          acceptation des présentes conditions générales.
                        </h5>
                        <p>
                          Toutes mes prestations de service sont soumises aux
                          règles contractuelles suivantes : Le présent contrat
                          est conclu entre la société prestataire, ci après
                          dénommée Protonwebmaster, et le CLIENT final, ci après
                          dénommé CLIENT.
                        </p>
                        <br />
                        <h4>
                          Prestations de service et ventes de marchandises.
                        </h4>
                        <p>
                          1.1 - Tout achat de prestations commercialisées
                          par Protonwebmaster entraîne l’adhésion entière et
                          sans réserve aux présentes conditions générales de
                          vente. 1.2 - Aucune condition particulière ne peut,
                          sauf acceptation formelle écrite de notre part,
                          prévaloir contre nos conditions générales de ventes.
                          Toute condition contraire posée par le CLIENT sera
                          donc inopposable à défaut d’acceptation expresse et
                          écrite de notre part. 1.3 - Le fait que nous ne nous
                          prévalions pas, à quelque moment que ce soit, de l’une
                          quelconque des présentes conditions générales de vente
                          ne peut être interprété comme valant renonciation à se
                          prévaloir ultérieurement de l’une quelconque desdites
                          conditions.1.4 – A la commande, le CLIENT qui fournit
                          une maquette de son projet, (site internet, flyers
                          etc…) ne pourra se prévaloir d’une garantie à 100% de
                          la fidélité du projet fini en rapport avec ladite
                          maquette, car son interprétation peu être faussée par
                          le manque d’information fournie par le client ou sa
                          qualité. Ainsi, nous offrons la possibilité de
                          réaliser cette maquette par nos soins, pour une
                          garanti maximale.1.5 – Retouches : Un nombre limité de
                          retouches est comprise dans le prix de vente, soit 4
                          par projets, au-delà, le CLIENT peu en demander autant
                          qu’il le désire avec des frais en plus lui incombant.
                        </p>
                        <h5>Création de sites Web</h5>
                        <p>
                          1.1 - Sécurité 1.1.1 – Protonwebmaster s{"'"}engage
                          dans le cadre d{"'"}une obligation générale de moyens
                          à tout mettre en œuvre pour assurer la meilleure
                          qualité et régularité des services qu{"'"}il apporte.
                          1.1.2 Protonwebmaster ne peut être tenu pour
                          responsable de quelque dommage que ce soit subi par le
                          CLIENT, y compris les pertes ou les altérations de
                          données. 1.1.3 - Dans le cadre de la création de sites
                          Internet gérés par le CLIENT, Protonwebmasterapportera
                          un soin particulier à la protection des accès CLIENT.
                        </p>
                        <h5>Responsabilité liée à la prestation</h5>
                        <p>
                          1.1 - La responsabilité de Protonwebmaster est limitée
                          au site internet et à son contenu initial dont elle a
                          le contrôle direct. 1.2 – Protonwebmaster ne saurait
                          être responsable des liaisons de tous types, assurées
                          par d’autres prestataires. 1.3 – Protonwebmaster ne
                          saurait être responsable des dégâts accidentels ou
                          volontaires causés par des tiers au CLIENT du fait de
                          sa connexion à Internet. 1.4 – Protonwebmaster ne
                          saurait être responsable, dans le cadre d{"'"}un site
                          géré par le CLIENT ou Protonwebmaster, de la perte, du
                          vol ou de la diffusion des codes d{"'"}accès CLIENT.
                          1.5 - Pour toute commande de création et réserve le
                          droit de refuser tout texte, illustration et en
                          général tous contenus qui sont contraires aux bonnes
                          mœurs, ou en infraction avec la législation en
                          vigueur. 1.6 – Protonwebmaster se réserve le droit d
                          {"'"}insérer en bas de la page d{"'"}accueil du CLIENT
                          et de façon discrète une mention du type : « Developed
                          by Protonwebmaster » ou
                          «Webmaster:Protonwebmaster»avec un lien sites de son
                          entreprise.
                        </p>
                        <h5>Obligations du CLIENT</h5>
                        <p>
                          1.1 - Dans le cas ou le CLIENT fournit
                          à Protonwebmaster les informations nécessaires à l
                          {"'"}exécution de la commande, ces informations
                          devront être transmises selon les spécifications
                          définies par Protonwebmaster. La réalisation du site
                          web et/ou des prestations associées commandées
                          interviendront dans un délai fixé à la commande et,
                          dans tous les cas, à compter du moment de la réception
                          de toutes les informations nécessaires à cette
                          réalisation. 1.2 - Dans le cas ou Protonwebmaster
                          assure le contenu rédactionnel tel que textes, photos
                          et vidéo en complément ou non des informations
                          fournies par le CLIENT, l{"'"}article 1.3 s{"'"}
                          applique également. 1.3 - L{"'"}ensemble des
                          informations ayant été, préalablement à leurs
                          diffusions, sélectionnées par le CLIENT,
                          Protonwebmaster ne saurait être en aucun cas rendu
                          responsable de leur contenu. Lors de l{"'"}acceptation
                          de la commande, nous présumons que le CLIENT est en
                          possession du droit d{"'"}auteur, de diffusion ou de
                          reproduction, et assume toute responsabilité pour les
                          préjudices résultant d{"'"}une violation des droits d
                          {"'"}auteur, de diffusion ou de reproduction
                          appartenant à un tiers. 1.4 – Protonwebmaster ne
                          saurait être tenu pour responsable du non
                          fonctionnement de tout ou partie du site Internet dans
                          le cas d{"'"}un hébergement non assuré par ses soins.
                          1.5 - Le CLIENT sait que Protonwebmaster reste seul
                          propriétaire des droits de reproduction de ses
                          créations internet, résultant notamment de la
                          propriété littéraire et artistique. Toute
                          représentation ou reproduction même partielle faite
                          sans autorisation est illicite.
                        </p>
                        <h5>Prix des services, facturation, règlement.</h5>
                        <p>
                          1.1 - Les prix des prestations (création de site
                          Internet, achat de nom de domaine, référencement,
                          maintenance) proposées sont ceux mentionnés dans le
                          devis. Ils s{"'"}entendent hors taxes et sont payables
                          en euros selon la modalité suivante : 1/3 à la
                          commande, 1/3 en milieu des travaux et le solde à la
                          livraison, sauf autre accord précisé sur le devis. Les
                          tarifs sont garantis sans variation à la signature de
                          la commande, sauf application de l{"'"}article 3 -3.4
                          et de l{"'"}article 18. 7.2 - La signature du devis
                          par le CLIENT vaut reconnaissance du versement de l
                          {"'"}
                          acompte.
                        </p>
                        <h5>Propriété</h5>
                        <p>
                          1.1 - Conformément à la loi du 25 janvier 1985, le
                          transfert de propriété des prestations faisant l{"'"}
                          objet de la facture ne sera effectif qu{"'"}au moment
                          du paiement intégral du prix mentionné.
                        </p>
                        <CgvLoader />
                      </span>
                    )
                  },
                  {
                    tabButton: "Attributions",
                    tabIcon: NoteAddIcon,
                    tabContent: (
                      <span>
                        <h4>Attribution du thème.</h4>
                        <p>
                          <a href="https://www.creative-tim.com/product/material-kit">
                            Creative Tim - Material Kit Free Bootstrap 4 Ui Kit.
                          </a>
                        </p>
                        <h4>Attributions des images et des icônes.</h4>
                        <p>
                          Image par <a href="https://pixabay.com/fr">Pixabay</a>
                          <br />
                          <a href="https://www.vecteezy.com">
                            {" "}
                            Vectors by Vecteezy{" "}
                          </a>
                          <br />
                          Icons made by{" "}
                          <a href="https://www.flaticon.com" title="Flaticon">
                            {" "}
                            www.flaticon.com{" "}
                          </a>
                          <br />
                          <a href="https://www.freepik.com/free-photos-vectors/design">
                            Design vector created by freepik - www.freepik.com
                          </a>
                          <br />
                          <a href="https://codepen.io/JavaScriptJunkie/pen/YzzNGeR">
                            Muhammed Erdem - codepen.
                          </a>
                        </p>
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
