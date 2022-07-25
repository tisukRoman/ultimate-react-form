import { TextField } from '@mui/material';
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <TextField
      fullWidth
      margin='normal'
      variant='outlined'
      inputRef={ref}
      {...props}
    />
  );
});

export default Input;
