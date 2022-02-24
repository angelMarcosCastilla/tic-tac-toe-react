import React from "react";
import { MAX_ROUND } from "../../config/config";

export default function Score({ round }) {
  return (
    <div className="score">
      <div className="ronda">
        <span className="ronda__text">Ronda</span>
        <span>
          {round}/{MAX_ROUND}
        </span>
      </div>
      <div className="puntajes">
        <p>G: 0</p>
        <p>P: 0</p>
        <p>E: 0</p>
      </div>
    </div>
  );
}
