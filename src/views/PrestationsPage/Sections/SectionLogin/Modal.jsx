import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

class ModalPage extends Component {
  state = {
    modal3: true
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="primary" onClick={this.toggle(3)}>
          Etat de votre connexion.
        </MDBBtn>
        <MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)} size="sm">
          <MDBModalHeader toggle={this.toggle(3)}>
            <br />
            <br />
            Etat de votre connexion.
          </MDBModalHeader>
          <MDBModalBody>Vous êtes bien connecté !</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="primary" size="sm" onClick={this.toggle(3)}>
              Fermer
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
