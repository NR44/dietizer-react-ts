import React, { useState } from "react";

const PatientStatus: React.FunctionComponent = () => {

  const [isVented, setIsVented] = useState(true);
  const [hasTrauma, setHasTrauma] = useState(true);

  function handleInputChange(e: any) {
    if (e.target.name === "vent") {
      setIsVented(!e.target.checked);
      
    } else {
      setHasTrauma(!e.target.checked);
    }
  }

  return (
    <div>
      <label htmlFor="gender">Gender: </label>
      <div>
        <input
          name="gender"
          id="male"
          value="male"
          type="radio" />
        <label htmlFor="male">Male</label>
        <input
          name="gender"
          value="female"
          type="radio" />
        <label htmlFor="female">Female</label>
      </div>
      <label htmlFor="vent">Vent: </label>
      <input
        name="vent"
        id="vent"
        type="checkbox"
        onChange={handleInputChange} />
      <label htmlFor="trauma">Trauma: </label>
      <input
        name="trauma"
        id="trauma"
        type="checkbox"
        onChange={handleInputChange}
        disabled={isVented}
      />
      <label htmlFor="burns">Burns: </label>
      <input
        type="checkbox"
        id="burns"
        disabled={hasTrauma} />
    </div>
  );
};

export default PatientStatus;