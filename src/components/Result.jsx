import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../hooks/useFormContext';
import { makeStyles } from '@mui/styles';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FormContainer from './FormContainer';
import PrimaryButton from './PrimaryButton';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import Swal from 'sweetalert2';
import ReactConfetti from 'react-confetti';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  flex: {
    marginTop: '2em',
    display: 'flex',
    justifyContent: 'space-between',
  },
  btn: {
    width: '45%',
  },
}));

const Result = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { formContext } = useFormContext();
  const [success, setSuccess] = useState(false);

  const textEntries = Object.entries(formContext).filter(([key, value]) => {
    if (key !== 'files') return true;
    else return false;
  });

  const files = formContext.files;

  const onSubmit = async () => {
    const formData = new FormData();

    textEntries.forEach(([key, value]) => {
      formData.append(key, value);
    });

    files.forEach((file) => {
      formData.append('files', file, file.name);
    });

    const res = await new Promise((resolve) =>
      setTimeout(() => resolve({ ok: true }), 1000)
    );

    if (res.ok) {
      Swal.fire('Great Job!', 'You goddamn did it!!!', 'success');
      setSuccess(true);
    } else {
      alert('something wrong...');
    }
  };

  const onStartOver = () => {
    navigate('/');
  };

  if (success) {
    return <ReactConfetti />;
  }

  return (
    <FormContainer>
      <Typography
        component='h2'
        variant='h5'
        textAlign='center'
        marginBottom='2em'
      >
        Your data:
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {textEntries.map(([key, value]) => (
              <TableRow key={key}>
                <TableCell align='center'>{key}: </TableCell>
                <TableCell align='center'>{String(value)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography
            component='h3'
            variant='h6'
            textAlign='center'
            margin='1em 0 0.5em 0'
          >
            Your files:
          </Typography>
          <List>
            {files.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} secondary={item.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <div className={styles.flex}>
        <PrimaryButton
          onClick={onStartOver}
          className={styles.btn}
          fullWidth={false}
        >
          Start Over
        </PrimaryButton>
        <PrimaryButton
          onClick={onSubmit}
          color='secondary'
          className={styles.btn}
          fullWidth={false}
        >
          Submit
        </PrimaryButton>
      </div>
    </FormContainer>
  );
};

export default Result;
