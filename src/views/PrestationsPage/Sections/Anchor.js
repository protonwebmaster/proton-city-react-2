import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

export default function Anchor() {
  return (
    <div>
      <a href="#section1"> Go to section 1 </a>
      <a href="#section2"> Go to section 2 </a>
      <ScrollableAnchor id={"section1"}>
        <div> Hello World </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"section2"}>
        <div> How are you world? </div>
      </ScrollableAnchor>
    </div>
  );
}
