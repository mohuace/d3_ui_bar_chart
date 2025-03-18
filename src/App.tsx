import React from "react";
import { Box } from "@mui/material";
import DateFilter from "./DateFilter";
import DataTypeFilter from "./DataTypeFilter";
import GroupedBarChart from "./GroupedBarChart";

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Left Panel (30%) */}
      <Box
        sx={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid #ccc",
          padding: 2,
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <DateFilter />
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          <DataTypeFilter />
        </Box>
      </Box>

      {/* Right Panel (70%) */}
      <Box sx={{ width: "70%", display: "flex", flexDirection: "column", padding: 2 }}>
        <GroupedBarChart />
      </Box>
    </Box>
  );
};

export default App;