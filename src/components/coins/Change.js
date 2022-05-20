import React, { useState } from "react";
import ChangeArgInfo from "../../data/ChangeArgInfo";

const Change = () => {
  const [change, setChange] = useState(null);

  const handleChange = (response) => {
    setChange(response);
  };
  return (
    <>
      <ChangeArgInfo handleChange={handleChange} />

      <h4
        style={{
          color: "darkblue",
          marginLeft: "2px",
          marginTop: "10px",
          marginRight: "0px",
          padding: "0px",
        }}
      >
        Tipo de cambio Dolar Oficial: $ {!change ? "000,00" : change}
      </h4>
    </>
  );
};

export default Change;
