import React, { Component } from "react";
import charte from "assets/pdf/charteGraphique.pdf";
import Button from "components/CustomButtons/Button.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBIcon } from "mdbreact";

export default class ButtonLoader extends Component {
  state = {
    loading: false
  };

  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
      window.location = charte;
    }, 3000);
  };

  render() {
    const { loading } = this.state;

    return (
      <Button
        color="danger"
        className="button"
        onClick={this.fetchData}
        disabled={loading}
        size="lg"
        target="_parent"
        rel="noopener noreferrer"
      >
        {loading && <MDBIcon icon="cog" spin size="2x" fixed />}
        {loading && <span className="sr-only">Loading...</span>}
        {!loading && <span>C.G.V. ( Pdf en Cours)</span>}
      </Button>
    );
  }
}
