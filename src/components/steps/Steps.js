import React from "react";
import "./Steps.scss";

function Steps() {
  const data = [
    {
      step_name: "Heading",
      steps_contain:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet neque, officia voluptatem sed ullam itaque doloribus ut a, saepe earum repellat reiciendis minima. Libero, distinctio.",
    },
    {
      step_name: "Heading",
      steps_contain:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet neque, officia voluptatem sed ullam itaque doloribus ut a, saepe earum repellat reiciendis minima. Libero, distinctio.",
    },
    {
      step_name: "Heading",
      steps_contain:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet neque, officia voluptatem sed ullam itaque doloribus ut a, saepe earum repellat reiciendis minima. Libero, distinctio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet neque, officia voluptatem sed ullam itaque doloribus ut a, saepe earum repellat reiciendis minima. Libero, distinctio.",
    },
  ];

  return (
    <>
      <div class="parent step-parent">
        {data.map((item, index) => (
          <div class="containelr step-container">
            <div class="step-left">
              <img src="" alt="" />
            </div>
            <div class="step-right">
              <h3>{item.step_name}</h3>
              <p>{item.steps_contain}</p>
            </div>

            <div class="steps-circle">
              <span className="steps-inner-circle"></span>
            </div>
          </div>
        ))}

        <div class="steps-middle-line"></div>

       
      </div>
    </>
  );
}

export default Steps;
