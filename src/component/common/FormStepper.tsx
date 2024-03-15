import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

interface StepperComponentProps {
  activeStep: number;
  steps: string[];
}

const FormStepper: React.FC<StepperComponentProps> = ({
  activeStep,
  steps,
}) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default FormStepper;
