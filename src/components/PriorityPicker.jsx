import React, { useState } from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

function PriorityPicker({ required }) {
  const [priority, setPriority] = useState("");
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <FormControl className="formControl">
      <InputLabel id="priority-select-label">Priority</InputLabel>
      <Select
        labelId="priority-select-label"
        id="priority-select"
        value={priority}
        required={required}
        onChange={handlePriorityChange}
        className="formControl"
      >
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </Select>
    </FormControl>
  );
}

export default PriorityPicker;
