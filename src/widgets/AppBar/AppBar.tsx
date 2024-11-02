import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export const AppBar = () => {
  const [mode, setMode] = useState("chat");

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <FormControl fullWidth size="medium">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mode}
            label="Age"
            onChange={handleChange}
            autoWidth
            variant="standard"
            sx={{
              fontSize: "20px",
            }}
          >
            <MenuItem value={"chat"}>Система AI</MenuItem>
            <MenuItem value={"charts"}>Аналитические данные</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};
