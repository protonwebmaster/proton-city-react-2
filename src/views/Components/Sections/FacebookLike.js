import React, { Component } from "react";
import { FacebookProvider, Like } from "react-facebook";
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="330944807970336">
        <Like
          href="https://www.facebook.com/protonwebmaster"
          colorScheme="dark"
          share
        />
      </FacebookProvider>
    );
  }
}