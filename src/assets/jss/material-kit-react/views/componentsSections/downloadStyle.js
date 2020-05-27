import { container } from "assets/jss/material-kit-react.js";

const downloadStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  textCenter: {
    textAlign: "center"
  },
  sharingArea: {
    marginTop: "80px"
  },
  h4a: {
    fontSize: "1.5rem",
    "@media (max-width:768px)": {
      fontSize: "95%"
    },
    "@media (max-width:600px)": {
      fontSize: "90%"
    }
  },
  socials: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    fontSize: "20px",
    marginRight: "4px"
  }
};

export default downloadStyle;
