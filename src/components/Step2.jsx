import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useFormContext } from '../hooks/useFormContext';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import FormContainer from './FormContainer';
import PrimaryButton from './PrimaryButton';
import Input from './Input';
import Form from './Form';

const validationSchema = yup.object({
  email: yup.string().email('Not am email').required('Email required'),
  phone: yup.string(),
});

const Step2 = () => {
  const navigate = useNavigate();
  const { formContext, setFormContext } = useFormContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: formContext.email,
      hasPhone: formContext.hasPhone,
      phone: formContext.phone,
    },
  });

  const normilizePhoneNumber = (e) => {
    const parsedPhone = parsePhoneNumberFromString(e.target.value);
    if (!parsedPhone) {
      return;
    } else {
      e.target.value = parsedPhone.formatInternational();
    }
  };

  const onSubmit = (data) => {
    setFormContext(data);
    navigate('/step3');
  };

  const hasPhone = watch('hasPhone');

  return (
    <FormContainer>
      <Typography>Tell your Email</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id='email'
          type='email'
          label='Email'
          error={!!errors.email}
          helperText={errors?.email?.message}
          {...register('email')}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultValue={formContext.hasPhone}
              defaultChecked={formContext.hasPhone}
              id='hasPhone'
              color='primary'
              {...register('hasPhone')}
            />
          }
          label='Do you have a phone?'
        />
        {hasPhone && (
          <Input
            id='phone'
            type='tel'
            label='Phone Number'
            error={!!errors.phone}
            helperText={errors?.phone?.message}
            {...register('phone')}
            onChange={normilizePhoneNumber}
          />
        )}
        <PrimaryButton type='submit'>Next</PrimaryButton>
      </Form>
    </FormContainer>
  );
};

export default Step2;
