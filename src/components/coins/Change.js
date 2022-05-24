import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChangeArg } from "../../redux/actions";

const Change = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // const handleChange = (response) => {
  //   setChange(response);
  // };

  useEffect(() => {
    dispatch(getChangeArg(setLoading));
  }, [dispatch]);

  const changeArg = useSelector((state) => state.changeArg);
  return (
    <>
      {/* <ChangeArgInfo handleChange={handleChange} /> */}

      <h4
        style={{
          color: "darkblue",
          marginLeft: "2px",
          marginTop: "10px",
          marginRight: "0px",
          padding: "0px",
        }}
      >
        Tipo de cambio Dolar Oficial: $ {!changeArg ? "000,00" : changeArg}
      </h4>
    </>
  );
};

export default Change;
