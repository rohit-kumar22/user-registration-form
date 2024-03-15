import React from 'react';
import { useForm, SubmitHandler, useFieldArray, FormProvider } from 'react-hook-form';
import { Button, Box, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
  onSubmit: (data: any[]) => void;
}

interface IFamilyFormData {
  fields: {
    [key: string]: any;
  };
}

const FamilyRegistrationForm: React.FC<IFamilyFormProps> = ({ familyData, onSubmit }) => {
  const methods = useForm<{ families: IFamilyFormData[] }>({
    defaultValues: {
      families: [{ fields: {} }],
    },
  });
  const { control } = methods; 

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'families',
  });

  const onSubmitForm: SubmitHandler<{ families: IFamilyFormData[] }> = (data) => {
    onSubmit(data.families);
  };

  return (
    
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitForm)}>
      <Box sx={{maxHeight:'75vh', overflowY:'scroll'}}>
        {fields.map((item, index) => (
          <Box key={item.id} my={2} border={1} borderColor="grey.300" p={2}>
            <Grid container spacing={2}>
              {familyData.map((input, inputIndex) => (
                <Grid item xs={12} sm={6} key={inputIndex}>
                  <FormInput
                    control={control} 
                    name={`families.${index}.fields.${input.name}`}
                    label={input.label}
                    required={input.required}
                    type={input.type}
                    error={Boolean(methods.formState.errors?.families?.[index]?.fields?.[input.name])}
                    helperText={(methods.formState.errors.families?.[index]?.fields?.[input.name]?.message as string) ?? ''}
                    icon={input.icon}
                    validationRule={input.validationRule}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <IconButton onClick={() => remove(index)} disabled={fields.length === 1}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        ))}
        </Box>
        
        <Button startIcon={<AddCircleOutlineIcon />} onClick={() => append({ fields: {} })} variant="contained">
          Add Another Family
        </Button>
        
        <Box my={2} sx={{display:'flex', justifyContent:'flex-end'}}>
        <Button type="submit" variant="contained" color="primary">
          Submit All
        </Button>
        </Box>
      </form>
    </FormProvider>
    
  );
};

export default FamilyRegistrationForm;
