import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "300px",
        marginTop: "300px",
      }}
    >
      {" "}
      <CircularProgress
        disableShrink
        style={{
          color: "blue",
        }}
        size="12rem"
      />
    </div>
  );
};

export default Loading;
