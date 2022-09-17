import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CalculateIcon from "@mui/icons-material/Calculate";

function Gold() {
  return (
    <Grid container rowSpacing={2} mt={5}>
      <Grid item xs={12}>
        <h4>
          လက်ရှိ‌ရွှေ‌ဈေးနှုန်းတွင် မိမိ၌ရှိသောငွေဖြင့် ရွှေမည်မျှ ရရှိမည်ကို
          တွက်ချက်ရန်
        </h4>
      </Grid>
      <Grid item xs={12}>
        50,000 kyats
      </Grid>

      <Grid item xs={12}>
        0-Kyats 7-Pays 1-Roys
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="dfd"
          label="လက်ရှိ‌ရွှေ‌ဈေးနှုန်း"
          size="small"
          fullWidth="true"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="meney-we-have"
          label="မိမိ၌ရှိသောငွေ"
          size="small"
          fullWidth="true"
        />
      </Grid>

      <Grid item xs={12} container columnSpacing={2}>
        <Grid item xs={6}>
          <Button
            startIcon={<DeleteIcon />}
            variant="contained"
            color="error"
            fullWidth="true"
          >
            ဖျက်မည်
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            startIcon={<CalculateIcon />}
            variant="contained"
            color="primary"
            fullWidth="true"
          >
            တွက်ချက်မည်
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Gold;
