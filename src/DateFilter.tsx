import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const DateFilter: React.FC = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField
        label="From Date"
        type="date"
        //InputLabelProps={{ shrink: true }}
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
      />
      <TextField
        label="To Date"
        type="date"
        //InputLabelProps={{ shrink: true }}
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
      />
      <Button variant="contained">Search</Button>
    </Box>
  );
};

export default DateFilter;