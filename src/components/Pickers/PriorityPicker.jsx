import React, { useState, useEffect } from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

function PriorityPicker({ required, pickPriority, preValue }) {
  const [priority, setPriority] = useState("");

  useEffect(() => {
    pickPriority(priority);
  }, [pickPriority, priority]);

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
    return priority;
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
