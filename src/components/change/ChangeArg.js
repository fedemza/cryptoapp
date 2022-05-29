import React from "react";

const ChangeArg = ({ loading, changeArg }) => {
  return (
    <h4
      style={{
        // color: "darkblue",
        marginLeft: "2px",
        marginTop: "10px",
        marginRight: "0px",
        padding: "0px",
      }}
    >
      Tipo de cambio Dolar Oficial: $ {loading ? "000,00" : changeArg}
    </h4>
  );
};

export default ChangeArg;
