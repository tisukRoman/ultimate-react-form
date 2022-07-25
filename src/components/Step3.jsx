import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Typography } from '@mui/material';
import PrimaryButton from './PrimaryButton';
import FormContainer from './FormContainer';
import FileInput from './FileInput';
import Form from './Form';

const Step3 = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate('/result');
  };

  return (
    <FormContainer>
      <Typography>Upload some files</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name='files' control={control} />
      </Form>
      <PrimaryButton>Next</PrimaryButton>
    </FormContainer>
  );
};

export default Step3;
