import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../SelectAuto/SelectAuto.css'

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, maxWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Talle</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value={10}>7.5</MenuItem>
          <MenuItem value={21}>8</MenuItem>
          <MenuItem value={22}>8.5</MenuItem>
          <MenuItem value={23}>9</MenuItem>
          <MenuItem value={24}>9.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
