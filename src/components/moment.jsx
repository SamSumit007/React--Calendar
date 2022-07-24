import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


export default function StaticDatePickerDemo() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <StaticDatePicker
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);
}