import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Money from "./components/moneyCal";
import Gold from "./components/goldCalculation";
import { Box } from "@mui/system";

function App() {
  return (
    <Grid container columnSpacing={2} m={10}>
      <Grid xs={12} sm={12} md={6} item>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
          }}
        >
          <Money />
        </Box>
      </Grid>

      <Grid xs={12} sm={12} md={6} item>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
          }}
        >
          <Gold />
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
