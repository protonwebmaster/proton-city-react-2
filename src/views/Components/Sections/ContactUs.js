import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import emailjs from "emailjs-com";
import styles from "assets/jss/material-kit-react/components/customInputStyle.js";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import image from "assets/img/bg7-min.jpg";

const useStyles = makeStyles(styles);

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "proton0420", e.target, "user_wPO3M4STYZNO4sA0mqIjL")
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  const ctstyle = {
    textAlign: "center"
  };

  const inputstyle = {
    margin: "5px",
    width: "100%",
    border: "none",
    background: "#CEF8FF"
  };

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();

  function handleClick() {
    alert("Message envoye.");
  }

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}
    >
      <div className={classes.container}>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={sendEmail}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4 style={ctstyle}>Contact*</h4>
                  </CardHeader>
                  <p style={ctstyle} className={classes.divider}>
                    *Pour un contact rapide n{"'"}oubliez pas votre numéro de
                    téléphone.
                  </p>
                  <CardBody>
                    <input type="hidden" name="contact_number" />
                    <label>Nom</label>
                    <input
                      style={inputstyle}
                      type="text"
                      name="user_name"
                      required
                      minLength="4"
                      maxLength="10"
                    />
                    <label>Email</label>
                    <input
                      style={inputstyle}
                      type="email"
                      name="user_email"
                      required
                    />
                    <label>Message</label>
                    <textarea
                      style={inputstyle}
                      name="message"
                      maxLength="140"
                      rows="5"
                    />
                    <GridItem
                      xs={12}
                      sm={12}
                      md={4}
                      className={classes.textCenter}
                    >
                      <Button
                        onClick={handleClick}
                        color="primary"
                        type="submit"
                        value="Send"
                      >
                        Envoyer
                      </Button>
                    </GridItem>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}></CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </ScrollAnimation>
      </div>
    </div>
  );
}
