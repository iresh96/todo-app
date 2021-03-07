import React, { useState, useEffect } from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

function ColorPicker({ required, pickColor }) {
  const [color, setColor] = useState("");

  const colorPlate = ["blue", "purple", "pink", "orange", "green"];

  useEffect(() => {
    pickColor(color);
  }, [pickColor, color]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
    // return color;
  };
  return (
    <FormControl className="formControl">
      <InputLabel id="color-select-label">Color</InputLabel>
      <Select
        labelId="color-select-label"
        id="color-select"
        value={color}
        required={required}
        onChange={handleColorChange}
        className="formControl"
      >
        {colorPlate.map((color, index) => (
          <MenuItem value={color} className={color} key={index}>
            {color}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ColorPicker;
