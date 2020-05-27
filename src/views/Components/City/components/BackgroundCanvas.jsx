import React, { Suspense } from "react";
import { Canvas, Dom } from "react-three-fiber";
import RedCityObject from "./RedCityObject";

export default function BackgroundCanvas() {
  return (
    <Canvas
      style={{ background: "rgba(0, 188, 212, 0.46)" }}
      camera={{ position: [0, 5, 0], fov: 40 }}
    >
      <fog attach="fog" args={["rgba(0, 188, 212, 0.46)", 0, 450]} />
      <Suspense
        fallback={
          <Dom center>
            ................................................................Loading...
          </Dom>
        }
      >
        <RedCityObject />
      </Suspense>
    </Canvas>
  );
}
