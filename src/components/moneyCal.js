import { Grid, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

function Money() {
  const [result, getResult] = useState("---");
  const [kyat, setKyat] = useState("");
  const [pay, setPay] = useState("");
  const [roy, setRoy] = useState("");
  const [current_gold_price, setCurrentGoldPrice] = useState("");

  //--------------Clear All Text Field Function -----------------------------
  const clearAllTextField = () => {
    getResult("---");
    setKyat("");
    setPay("");
    setRoy("");
    setCurrentGoldPrice("");
  };

  // ****************** Main Calculation Function ************************************
  const calculationButtonClick = () => {
    if (current_gold_price !== "") {
      if (kyat !== "" || pay !== "" || roy !== "") {
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
          kyat === "" ||
          roy === "" ||
          pay === ""
        ) {
          let temp =
            "" + parseInt(total_roy * (parseInt(current_gold_price) / 128));
          temp = temp.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

          getResult(temp + " ကျပ်");
        }
      }
    }
  };

  return (
    <Grid container rowSpacing={2} direction="column">
      <Grid item xs={12}>
        <Typography variant="subtitle1" fontWeight="bold" color="primary.dark">
          လက်ရှိ ရွှေဈေးနှုန်းဖြင့် ဝယ်လိုသော ရွှေပမာဏအတွက် ကျသင့်ငွေတွက်ချက်ရန်
        </Typography>
      </Grid>

      {/* ----------------Result-------------------- */}
      <Grid item xs={12}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 3,
              borderRadius: 2,
              p: 2,
            }}
          >
            <Box sx={{ color: "text.secondary" }}>ကျသင့်ငွေ</Box>
            <Box
              sx={{ color: "text.primary", fontSize: 24, fontWeight: "medium" }}
            >
              {result}
            </Box>
          </Box>
        </ThemeProvider>
      </Grid>

      {/* ------------Kyat TextField-------------------- */}
      <Grid item xs={12}>
        <TextField
          id="kyat_text_field"
          label="ကျပ်"
          size="medium"
          fullWidth
          type="number"
          value={kyat}
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
            size="medium"
            fullWidth
            type="number"
            value={pay}
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
            size="medium"
            fullWidth
            type="number"
            value={roy}
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
          size="medium"
          fullWidth
          type="number"
          value={current_gold_price}
          onChange={(e) => {
            setCurrentGoldPrice(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} container columnSpacing={2}>
        {/* ------------------------- Clear All TextField Button -------------------------- */}
        <Grid item xs={6}>
          <Button
            startIcon={<DeleteIcon />}
            variant="contained"
            color="error"
            fullWidth
            onClick={clearAllTextField}
          >
            ဖျက်မည်
          </Button>
        </Grid>

        <Grid item xs={6}>
          {/* ...................Calculate Button............................... */}
          <Button
            
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
