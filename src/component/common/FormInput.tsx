import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';

interface FormInputProps {
    name: string;
    label: string;
    required?: boolean;
    register: ReturnType<typeof useForm>['register'];
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
    register,
    error,
    helperText,
    type = 'text',
    icon: Icon,
    validationRule,
  }) => {
    const registrationOptions = {
      ...(required && { required: `${label} is required` }),
      ...(validationRule?.pattern && { // Conditionally include pattern if it exists
        pattern: {
          value: new RegExp(validationRule.pattern.value),
          message: validationRule.pattern.message,
        },
      }),
    };
  
    return (
      <TextField
        label={label}
        variant="outlined"
        type={type}
        fullWidth
        error={error}
        helperText={helperText}
        InputProps={{
          startAdornment: Icon ? (
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          ) : null,
        }}
        {...register(name, registrationOptions)}
      />
    );
  };
  
  

  export default FormInput
  