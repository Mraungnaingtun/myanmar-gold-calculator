import { Grid, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CalculateIcon from "@mui/icons-material/Calculate";

function Money() {
  const [result, getResult] = useState(0);
  const [kyat, setKyat] = useState(0);
  const [pay, setPay] = useState(0);
  const [roy, setRoy] = useState(0);
  const [current_gold_price, setCurrentGoldPrice] = useState(0);

  const calculationButtonClick = () => {
    let total_roy = 0;
    if (kyat !== "") {
      total_roy = parseInt(kyat) * 16;
      total_roy = total_roy * 8;
    }

    if (pay !== "" && parseInt(pay) < 16) {
      total_roy += parseInt(pay) * 8;
    }

    if (roy !== "" && parseInt(roy) < 8) {
      total_roy += parseInt(roy);
    }

    if (
      (parseInt(pay) < 16 && parseInt(roy) < 8) ||
      kyat == "" ||
      roy == "" ||
      pay == ""
    ) {
      getResult(total_roy * (parseInt(current_gold_price) / 128));
    }
  };

  return (
    <Grid container rowSpacing={2} direction="column" mt={5}>
      <Grid item xs={12}>
        <h4>
          လက်ရှိ ရွှေဈေးနှုန်းဖြင့် ဝယ်လိုသော ရွှေပမာဏအတွက် ကျသင့်ငွေတွက်ချက်ရန်
        </h4>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" color="primary">
          {result} ကျပ်
        </Typography>
      </Grid>

      {/* ------------Kyat TextField-------------------- */}
      <Grid item xs={12}>
        <TextField
          id="kyat_text_field"
          label="ကျပ်"
          size="small"
          fullWidth
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setKyat(e.target.value);
          }}
        />
      </Grid>

      {/* --------------------Pay TextField--------------------- */}
      <Grid item xs={12} container columnSpacing={2}>
        <Grid item xs={6}>
          <TextField
            id="pay_text_field"
            label="ပဲ"
            size="small"
            fullWidth
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setPay(e.target.value);
            }}
          />
        </Grid>
        {/* --------------------Roy TextField--------------------- */}
        <Grid item xs={6}>
          <TextField
            id="roy_text_field"
            label="ရွေး"
            size="small"
            fullWidth
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setRoy(e.target.value);
            }}
          />
        </Grid>
      </Grid>

      {/* --------------------Current Gold Price TextField--------------------- */}
      <Grid item xs={12}>
        <TextField
          id="current_gold_price"
          label="လက်ရှိ‌ရွှေ‌ဈေးနှုန်း"
          size="small"
          fullWidth
          type="number"
          required
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setCurrentGoldPrice(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} container columnSpacing={2}>
        <Grid item xs={6}>
          <Button
            startIcon={<DeleteIcon />}
            variant="contained"
            color="error"
            fullWidth
          >
            ဖျက်မည်
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            startIcon={<CalculateIcon />}
            variant="contained"
            color="primary"
            fullWidth
            onClick={calculationButtonClick}
          >
            တွက်ချက်မည်
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Money;
