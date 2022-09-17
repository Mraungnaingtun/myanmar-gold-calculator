import { Grid, TextField, Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CalculateIcon from "@mui/icons-material/Calculate";
import ClearIcon from "@mui/icons-material/Clear";
import { Clear } from "@mui/icons-material";

function Money() {
  return (
    <Grid container rowSpacing={2} direction="column" mt={5}>
      <Grid item xs={12}>
        <h4>
          လက်ရှိ ရွှေဈေးနှုန်းဖြင့် ဝယ်လိုသော ရွှေပမာဏအတွက် ကျသင့်ငွေတွက်ချက်ရန်
        </h4>
      </Grid>
      <Grid item xs={12}>
        50,000 ks
      </Grid>
      <Grid item xs={12}>
        <TextField id="dfd" label="ကျပ်" size="small" fullWidth="true" />
      </Grid>
      <Grid item xs={12} container columnSpacing={2}>
        <Grid item xs={6}>
          <TextField id="dfd" label="ပဲ" size="small" fullWidth="true" />
        </Grid>

        <Grid item xs={6}>
          <TextField id="dfd" label="ရွေး" size="small" fullWidth="true" />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="dfd"
          label="လက်ရှိ‌ရွှေ‌ဈေးနှုန်း"
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

export default Money;
