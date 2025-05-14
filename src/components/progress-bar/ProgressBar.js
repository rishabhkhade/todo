import React, { useState } from "react";
import "./Progress.scss";

function ProgressBar() {
  const [coloring, setColoring] = useState("red");


  const handleColor = () => {
    setColoring("Blue");
  }

  return (
    <>
      <div className="step">
        <div className="progress">
          <div className="progress-bar"></div>
          <div className="point active">1</div>
          <div className="point">2</div>
          <div className="point">3</div>
        </div>

        <div class="color">
          <p>This is {coloring} color</p>
          <button onClick={handleColor}>change color</button>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
