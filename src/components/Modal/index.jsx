import React from "react";
import reactDom from "react-dom";

export default function Modal({ ganador }) {
  return (
    <div className="modal">
      <p>El gandor de la ronda:</p>
      <span className={`turn turn-${ganador}`}>{ganador}</span>
    </div>
  );
}
