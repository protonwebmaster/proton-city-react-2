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
    "@media (max-width:600px)": {
      fontSize: "90%"
    }
  }
};

export default completedStyle;
