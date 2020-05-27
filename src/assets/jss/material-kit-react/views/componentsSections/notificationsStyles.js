import { container, title } from "assets/jss/material-kit-react.js";

const notificationsStyles = {
  section: {
    backgroundColor: "#FFFFFF",
    display: "block",
    width: "100%",
    position: "relative",
    padding: "0"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  stitle: {
    color: "red"
  },
  list: {
    fontSize: "80%",
    color: "grey",
    marginBottom: "10px",
    marginLeft: "50px"
  },
  container
};

export default notificationsStyles;
