import { Button } from '@mui/material';

const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button
      fullWidth
      variant='contained'
      color='primary'
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
