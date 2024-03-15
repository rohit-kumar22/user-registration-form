import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Box, Grid } from '@mui/material';
import FormInput from '../common/FormInput';
import { SvgIconComponent } from '@mui/icons-material';

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
  icon: SvgIconComponent;
}

interface IFamilyFormProps {
  familyData: IFormInput[];
  onSubmit: (data: IFamilyFormData) => void;
}

interface IFamilyFormData {
  [key: string]: any; 
}

const FamilyRegistrationForm: React.FC<IFamilyFormProps> = ({ familyData, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFamilyFormData>();

  const onSubmitForm: SubmitHandler<IFamilyFormData> = data => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Box width="600px">
        <Grid container spacing={2}>
          {familyData.map((input, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <FormInput
                name={input.name}
                label={input.label}
                required={input.required}
                type={input.type}
                register={register}
                error={Boolean(errors[input.name])}
                helperText={errors[input.name]?.message as string}
                icon={input.icon}
                validationRule={input.validationRule}
              />
            </Grid>
          ))}
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default FamilyRegistrationForm;