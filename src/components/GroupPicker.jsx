import React, { useState, useEffect } from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

function GroupPicker({ pickGroup }) {
  const [group, setGroup] = useState("");

  useEffect(() => {
    pickGroup(group);
  }, [pickGroup, group]);

  const handleGroupChange = (e) => {
    setGroup(e.target.value);
  };

  return (
    <FormControl variant="filled">
      <InputLabel id="priority-select-label">Group By</InputLabel>
      <Select
        labelId="priority-select-label"
        id="priority-select"
        value={group}
        onChange={handleGroupChange}
        className="formControl"
      >
        <MenuItem value="Color">Color</MenuItem>
        <MenuItem value="Priority">Priority</MenuItem>
        <MenuItem value="Month">Month</MenuItem>
      </Select>
    </FormControl>
  );
}

export default GroupPicker;
