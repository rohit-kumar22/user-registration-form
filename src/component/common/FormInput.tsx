import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextField, InputAdornment } from '@mui/material';

interface FormInputProps {
  name: string;
  label: string;
  required?: boolean;
  control: Control<any>; 
  error?: boolean;
  helperText?: string;
  type?: string;
  icon?: React.ElementType; 
  validationRule?: {
    pattern?: {
      value: string;
      message: string;
    };
  };
}
  
 const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  required = false,
  control,
  error,
  helperText,
  type = 'text',
  icon: Icon,
  validationRule,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? `${label} is required` : undefined,
        pattern: validationRule?.pattern ? {
          value: new RegExp(validationRule.pattern.value),
          message: validationRule.pattern.message,
        } : undefined,
      }}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          fullWidth
          type={type}
          error={error}
          helperText={helperText}
          InputProps={{
            startAdornment: Icon ? (
              <InputAdornment position="start">
                <Icon />
              </InputAdornment>
            ) : null,
          }}
        />
      )}
    />
  );
};

  
  

  export default FormInput
  