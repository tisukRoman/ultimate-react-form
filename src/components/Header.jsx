import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    marginTop: theme.spacing(8),
    textAlign: 'center',
    fontSize: '40px',
    color: theme.palette.secondary.main,
    textShadow: '1px 1px darkmagenta',
  },
}));

const Header = () => {
  const styles = useStyles();

  return (
    <Typography className={styles.root} component='h1' variant='h5'>
      The Ultimate form Challenge
    </Typography>
  );
};

export default Header;
