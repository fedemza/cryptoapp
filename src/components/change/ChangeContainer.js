import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChangeArg } from "../../redux/actions";
import ChangeArg from "./ChangeArg";

const ChangeContainer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getChangeArg(setLoading));
  }, [dispatch]);

  const changeArg = useSelector((state) => state.changeArg);
  return (
    <>
      <ChangeArg loading={loading} changeArg={changeArg} />
    </>
  );
};

export default ChangeContainer;
