import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const FormContainer = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Container className={styles.root} maxWidth='sm' {...props}>
      {children}
    </Container>
  );
};

export default FormContainer;
