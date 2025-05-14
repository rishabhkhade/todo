import React from "react";
import "./Indicator.scss"

function Indicator({text, bg}) {
  return (
    <div>
      <div class="section-indicator">
        <div class="line" style={{background:bg}}></div>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default Indicator;
