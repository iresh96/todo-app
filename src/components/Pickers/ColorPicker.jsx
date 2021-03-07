import React, { useState, useEffect } from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

function ColorPicker({ required, pickColor, none }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    pickColor(color);
  }, [pickColor, color]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
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
        <MenuItem value="blue" className="blue">
          Blue
        </MenuItem>
        <MenuItem value="purple" className="purple">
          Purple
        </MenuItem>
        <MenuItem value="pink" className="pink">
          Pink
        </MenuItem>
        <MenuItem value="orange" className="orange">
          Orange
        </MenuItem>
        <MenuItem value="green" className="green">
          Green
        </MenuItem>
        {none && <MenuItem value="">None</MenuItem>}
      </Select>
    </FormControl>
  );
}

export default ColorPicker;
