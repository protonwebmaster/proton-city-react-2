import { container } from "assets/jss/material-kit-react";

const completedStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...container,
    textAlign: "center !important"
  },
  h4a: {
    fontSize: "1.5rem",
    "@media (max-width:768px)": {
      fontSize: "95%"
    },
    "@media (max-width:400px)": {
      fontSize: "80%"
    }
  },
  img4a: {
    marginTop: "50px",
    marginBottom: "50px",
    border: "2px solid;",
    boxShadow: "5px 5px 3px 0px rgba(0,0,0,0.75)"
  },
  img4b: {
    marginTop: "50px",
    border: "2px solid;",
    boxShadow: "5px 5px 3px 0px rgba(0,0,0,0.75)"
  }
};

export default completedStyle;
