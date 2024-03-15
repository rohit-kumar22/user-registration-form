import React, { useState } from 'react';
import { Box } from '@mui/material';
import FormStepper from './common/FormStepper';
import UserRegistrationForm from './registrationForm/UserRegistrationForm';
import FamilyRegistrationForm from './registrationForm/FamilyRegistrationForm';
import { formData } from '../data/formData';

function App() {
    const [activeStep, setActiveStep] = useState(0);
    const [userData, setUserData] = useState({});
    const [familyData, setFamilyData] = useState({});
    const [RegistrationData, setRegistration] = useState([])
    const steps = ['User Details', 'Family Details'];

    const handleNext = (data: object) => {
        if (activeStep === 0) {
            setUserData(data);
            setActiveStep(1);
        }
    };

    const handleSubmit = (data: object) => {
        if (activeStep === 1) {
            setFamilyData(data);
            console.log('User Data:', userData);
            console.log('Family Data:', data); 
            setActiveStep(activeStep + 1);
        }
    };

    return (
        <Box style={{ width: '800px', margin: 'auto' }}>
            <FormStepper activeStep={activeStep} steps={steps} />
            {activeStep === 0 && (
                <UserRegistrationForm 
                    userData={formData.userInfo}
                    onNext={handleNext} />
            )}
            {activeStep === 1 && (
                <FamilyRegistrationForm 
                    familyData={formData.familyInfo}
                    onSubmit={handleSubmit} />
            )}
        </Box>
    );
}

export default App;
