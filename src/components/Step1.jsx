import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Typography } from '@mui/material';
import FormContainer from './FormContainer';
import PrimaryButton from './PrimaryButton';
import Input from './Input';
import Form from './Form';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First Name should not contain digits')
    .required('First Name required'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last Name should not contain digits')
    .required('Last Name required'),
});

const Step1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate('/step2');
  };

  return (
    <FormContainer>
      <Typography component='h2' variant='h5' textAlign='center'>
        Who are you?
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id='firstName'
          type='text'
          label='First Name'
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
          {...register('firstName')}
        />
        <Input
          id='lastName'
          type='text'
          label='Last Name'
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
          {...register('lastName')}
        />
        <PrimaryButton type='submit'>Next</PrimaryButton>
      </Form>
    </FormContainer>
  );
};

export default Step1;
