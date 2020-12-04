import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Vitals: React.FunctionComponent = () => {
  const [isVented, setIsVented] = useState(true);
  const [hasTrauma, setHasTrauma] = useState(true);

  function handleVentChange(e: any) {
    setIsVented(e.target.value === "no");
  }

  function handleTraumaChange(e: any) {
    setHasTrauma(e.target.value === "no");
  }

  return (
    <div>
      <Row>
        <label htmlFor="age">Age:</label>
        <input id="age" type="number"></input>
      </Row>
      <label htmlFor="height">Height:</label>
      <input id="height" type="number"></input>
      <label htmlFor="weight">Weight:</label>
      <input id="weight" type="number"></input>

      <label htmlFor="temperature">Temperature:</label>
      <input id="temperature" type="number"></input>

      <label htmlFor="ventRate">Ventilation Rate:</label>
      <input id="ventRate" type="number"></input>
      <Row>
        <label htmlFor="gender">Gender: </label>
        <select id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="vent">Vent: </label>
        <select id="vent" onChange={handleVentChange} defaultValue="no">
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
        <label htmlFor="trauma">Trauma: </label>
        <select
          id="trauma"
          onChange={handleTraumaChange}
          disabled={isVented}
          defaultValue="no"
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
        <label htmlFor="burns">Burns: </label>
        <select id="burns" disabled={hasTrauma}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </Row>
    </div>
  );
};

export default Vitals;
