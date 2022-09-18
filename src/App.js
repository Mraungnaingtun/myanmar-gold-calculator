import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Money from "./components/moneyCal";
import Gold from "./components/goldCalculation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shwe Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      {/* -------------Body------------------- */}
      <Grid container sx={{ textAlign: "-webkit-center" }}>
        <Grid xs={12} sm={12} md={6} item>
          <Box
            sx={{
              width: 300,
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <Money />
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={6} item>
          <Box
            sx={{
              width: 300,
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <Gold />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
