import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Box, Grid } from '@mui/material';
import FormInput from '../common/FormInput';

interface IFormInput {
  name: string;
  label: string;
  required: boolean;
  type: string;
  validationRule?: {
    pattern?: {
      value: string;
      message: string;
    };
  };
  icon: React.ElementType;
}

interface IUserFormProps {
  userData: IFormInput[];
  onNext: (data: IUserFormData) => void;
}

interface IUserFormData {
  [key: string]: any; 
}


const UserRegistrationForm: React.FC<IUserFormProps> = ({ userData, onNext }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<IUserFormData>();

  const onSubmit: SubmitHandler<IUserFormData> = data => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mt={2}>
        <Grid container spacing={2}>
          {userData.map((input, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <FormInput
                control={control}
                name={input.name}
                label={input.label}
                required={input.required}
                type={input.type}
                error={Boolean(errors[input.name])}
                helperText={errors[input.name]?.message as string}
                icon={input.icon}
                validationRule={input.validationRule}
              />
            </Grid>
          ))}
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Next
        </Button>
      </Box>
    </form>
  );
};

export default UserRegistrationForm;
