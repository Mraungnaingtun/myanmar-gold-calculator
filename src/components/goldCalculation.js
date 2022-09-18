import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useState } from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

function Gold() {
  const [shweAmount, setShweAmount] = useState("---");
  const [charge, setCharge] = useState("---");
  const [current_gold_price, setCurrentGoldPrice] = useState("");
  const [money_we_have, setMoneyWeHave] = useState("");

  // -----------------Main Calculation Function----------------//
  const mainCalculation = () => {
    if (current_gold_price !== "" && money_we_have !== "") {
      let kyat,
        pay,
        roy = 0;

      let output_string_format = "";

      //assign string to int
      let moneyWeHave = parseInt(money_we_have);
      let current_price = parseInt(current_gold_price);

      if (moneyWeHave >= current_price) {
        kyat = parseInt(moneyWeHave / current_price);
        moneyWeHave = moneyWeHave - kyat * current_price;
      }

      if (moneyWeHave >= parseInt(current_price / 16)) {
        pay = parseInt(moneyWeHave / (current_price / 16));
        moneyWeHave = moneyWeHave - pay * (current_price / 16);
      }

      if (moneyWeHave >= parseInt(current_price / 128)) {
        roy = parseInt(moneyWeHave / (current_price / 128));
        moneyWeHave = moneyWeHave - roy * (current_price / 128);
      }

      //setShweAmount(kyat + " ကျပ် " + pay + " ပဲ " + roy + " ရွေး ");

      if (kyat >= 1) output_string_format = kyat + " ကျပ် ";
      if (pay >= 1) output_string_format += pay + " ပဲ ";
      if (roy >= 1) output_string_format += roy + " ရွေး ";

      setShweAmount(output_string_format);
      let temp = parseInt(money_we_have) - moneyWeHave + "";
      temp = temp.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setCharge(temp);
    }
  };

  // --------------- Clear Fuction ------------------//
  const clearAll = () => {
    setShweAmount("---");
    setCharge("---");
    setCurrentGoldPrice("");
    setMoneyWeHave("");
  };

  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle1" color="primary.dark" fontWeight="bold">
          လက်ရှိ‌ရွှေ‌ဈေးနှုန်းတွင် မိမိ၌ရှိသောငွေဖြင့် ရွှေမည်မျှ ရရှိမည်ကို
          တွက်ချက်ရန်
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
            }}
          >
            <Box sx={{ color: "text.secondary" }}>ရွှေပမာဏ</Box>
            <Box
              sx={{ color: "text.primary", fontSize: 24, fontWeight: "medium" }}
            >
              {shweAmount}
            </Box>
            <Box
              sx={{
                color: "text.secondary",
                display: "inline",
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
              }}
            >
              ကျသင့်ငွေ
            </Box>
            <Box
              sx={{ color: "success.dark", display: "inline", fontSize: 14 }}
            >
              {charge} ကျပ်
            </Box>
          </Box>
        </ThemeProvider>
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="dfd"
          label="လက်ရှိ‌ရွှေ‌ဈေးနှုန်း"
          size="medium"
          type="number"
          fullWidth
          value={current_gold_price}
          onChange={(e) => {
            setCurrentGoldPrice(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="meney-we-have"
          label="မိမိ၌ရှိသောငွေ"
          size="medium"
          type="number"
          fullWidth
          value={money_we_have}
          onChange={(e) => {
            setMoneyWeHave(e.target.value);
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
            onClick={clearAll}
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
            onClick={mainCalculation}
          >
            တွက်ချက်မည်
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Gold;
