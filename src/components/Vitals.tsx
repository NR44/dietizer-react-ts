import React from "react";

const Vitals: React.FunctionComponent = () => {
  return (
    <div>
      <label htmlFor="age">Age:</label>
      <input id="age" type="number"></input>

      <label htmlFor="height">Height:</label>
      <input id="height" type="number"></input>

      <label htmlFor="weight">Weight:</label>
      <input id="weight" type="number"></input>

      <label htmlFor="temperature">Temperature:</label>
      <input id="temperature" type="number"></input>

      <label htmlFor="ventRate">Ventilation Rate:</label>
      <input id="ventRate" type="number"></input>
    </div>
  );
};

export default Vitals;
