import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useFormContext } from '../hooks/useFormContext';
import { Typography } from '@mui/material';
import PrimaryButton from './PrimaryButton';
import FormContainer from './FormContainer';
import FileInput from './FileInput';
import Form from './Form';

const Step3 = () => {
  const { formContext, setFormContext } = useFormContext();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: formContext.files,
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setFormContext(data);
    navigate('/result');
  };

  return (
    <FormContainer>
      <Typography>Upload some files</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name='files' control={control} />
        <PrimaryButton type='submit'>Next</PrimaryButton>
      </Form>
    </FormContainer>
  );
};

export default Step3;
