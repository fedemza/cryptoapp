import React, { useEffect } from "react";

const ChangeArgInfo = ({ handleChange }) => {
  useEffect(() => {
    fetch(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`)
      .then((response) => response.json())
      .then((response) => response[0].casa.venta)
      .then((response) => {
        handleChange(response);
      });
  }, [handleChange]);

  return <></>;
};

export default ChangeArgInfo;
