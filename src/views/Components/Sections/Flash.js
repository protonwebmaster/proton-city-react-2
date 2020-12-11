import React from "react";
import { flash } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";

const styles = {
  flash: {
    animation: "x 1s 3",
    animationName: Radium.keyframes(flash, "flash")
  }
};

function Flash() {
  return (
    <StyleRoot>
      <div className="test" style={styles.flash}>
        <a href="#section-p1">
          <ArrowDropDownCircleIcon />
        </a>
        <br />
        <a href="#section-p2">
          <ArrowDropDownCircleIcon />
        </a>
        <br />
        <a href="#section-p3">
          <ArrowDropDownCircleIcon />
        </a>
        <br />
        <a href="#section-p4">
          <ArrowDropDownCircleIcon />
        </a>
      </div>
    </StyleRoot>
  );
}
export default Flash;
