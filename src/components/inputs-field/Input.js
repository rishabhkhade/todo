import { Box, MenuItem, TextField } from "@mui/material";
import React from "react";

function Input() {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div class="parent">
          <div class="container">
            <div>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />

              <TextField
                id="outlineed"
                select
                label="Select"
                defaultValue="EUR"
                helperText="Please select your currency"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Input;
