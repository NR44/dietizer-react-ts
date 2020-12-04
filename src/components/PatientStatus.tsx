import React, { useState } from "react";

const PatientStatus: React.FunctionComponent = () => {

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
    </div>
  );
};

export default PatientStatus;