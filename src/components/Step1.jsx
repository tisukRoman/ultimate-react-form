import { useForm } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import FormContainer from './FormContainer';
import PrimaryButton from './PrimaryButton';
import Input from './Input';
import Form from './Form';

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(2),
  },
}));

const Step1 = () => {
  const styles = useStyles();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <Typography component='h2' variant='h5' textAlign='center'>
        Who are you?
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id='firstName'
          name='firstName'
          type='text'
          label='First Name'
          ref={{ ...register('firstName') }}
        />
        <Input
          id='lastName'
          name='lastName'
          type='text'
          label='Last Name'
          ref={{ ...register('lastName') }}
        />
        <PrimaryButton type='submit' className={styles.btn}>
          Next
        </PrimaryButton>
      </Form>
    </FormContainer>
  );
};

export default Step1;
