import React, { useEffect } from "react";

const ChangeArgInfo = ({ setChange, setChangeArg }) => {
  useEffect(() => {
    fetch(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`)
      .then((response) => response.json())
      .then((response) => response[0].casa.venta)
      .then((response) => {
        setChange(response);
      });
  }, [setChange]);
  useEffect(() => {
    fetch(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`)
      .then((response) => response.json())
      .then((data) => data[0].casa.venta)
      .then((response) => {
        setChangeArg(response);
      });
  }, [setChangeArg]);

  return <></>;
};

export default ChangeArgInfo;
