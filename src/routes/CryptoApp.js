import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const CryptoApp = () => {
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
    // background: {
    //   paper: "#121212",
    //   default: "green",
    // },
  });

  if (theme.palette.mode === "dark") {
    theme.palette.background.paper = "#050340";
    theme.palette.background.default = "#050340";
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: "100vh" }}>
        <Router>
          <Routes>
            <Route
              path="/*"
              element={<Dashboard mode={mode} setMode={setMode} />}
            />
          </Routes>
        </Router>
      </Paper>
    </ThemeProvider>
  );
};

export default CryptoApp;
