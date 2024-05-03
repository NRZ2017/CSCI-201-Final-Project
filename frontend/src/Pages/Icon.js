import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function InputWithIcon() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <AccountCircle sx={{ color: 'black.active', mr: 1, my: 0.5 }} />
    <TextField id="input-with-sx" label="FIRST NAME" variant="standard" />
    </Box> 
  );
}