import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Storm()  {
    const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>Stormshield Network Security</Alert.Heading>
        <p><strong>Protégez votre Entreprise contre les cyberattaques avec nos solutions Stormshield !</strong></p>
        <p>Un Par-feu (firewall) tout-en-un, un allié dans la protection de vos réseaux.</p>
        <p><a href="#section-p4">Vente, installation et configuration - Demandez votre devis.</a></p>
        <a href="https://dev.fredericbrodar.com/pdf/SNS-FR-Security-Packs-Brochure-201709.pdf"><img src="https://dev.fredericbrodar.com/img/stormshield1-min.jpg" width="768px" height="auto" alt="stormshield"></img></a>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
           Fermer
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}
  
export default Storm;