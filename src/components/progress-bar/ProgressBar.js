import React from "react";
import "./Progress.scss";

function ProgressBar() {
  return (
    <>
      <div className="step">
        <div className="progress">
          <div className="progress-bar"></div>
          <div className="point active">1</div>
          <div className="point">2</div>
          <div className="point">3</div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
