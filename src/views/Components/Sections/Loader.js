import React from "react";
import { render, useState, useEffect } from "react-dom";
import Button from "components/CustomButtons/Button.js";

export default function Loader() {
  function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Loading…" : "Click to load"}
      </Button>
    );
  }

  render(<LoadingButton />);
}
