import React, { useState } from "react";
import { FormGroup, FormControlLabel, Checkbox, Paper } from "@mui/material";

const DataTypeCheckList: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const dataTypes = ["Bloomberg", "Webex", "Reuters", "Yahoo Finance"];

  const handleChange = (dataType: string) => {
    setSelected((prev) =>
      prev.includes(dataType) ? prev.filter((d) => d !== dataType) : [...prev, dataType]
    );
  };

  return (
    <Paper sx={{ padding: 2, height: "100%", overflowY: "auto" }}>
      <FormGroup>
        {dataTypes.map((dataType) => (
          <FormControlLabel
            key={dataType}
            control={
              <Checkbox
                checked={selected.includes(dataType)}
                onChange={() => handleChange(dataType)}
              />
            }
            label={dataType}
          />
        ))}
      </FormGroup>
    </Paper>
  );
};

export default DataTypeCheckList;