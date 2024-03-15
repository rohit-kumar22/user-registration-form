import { useState } from 'react';
import { Box } from '@mui/material';
import FormStepper from './common/FormStepper';
import UserRegistrationForm from './registrationForm/UserRegistrationForm';
import FamilyRegistrationForm from './registrationForm/FamilyRegistrationForm';
import FormPreview from './registrationForm/FormPreview';
import { formData } from '../data/formData';

interface UserInfo {
    firstName: string;
    lastName: string;
    parentName: string;
    phoneNumber: string;
    email: string;
    address: string;
  }
  
  interface FamilyMember {
    fields: {
      relation: string;
      firstName: string;
      lastName: string;
      phoneNumber: string;
      email: string;
      address: string;
    }
  }
  
  type FamilyData = FamilyMember[];
  interface IUserFormData {
    [key: string]: any;
  }

function RegistrationForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [userData, setUserData] = useState<UserInfo | null>(null);
    const [familyData, setFamilyData] = useState<FamilyData>([]);
    const steps = ['User Details', 'Family Details'];

    function convertToUserInfo(data: IUserFormData): UserInfo {
        return {
          firstName: data.firstName,
          lastName: data.lastName,
          parentName: data.parentName,
          phoneNumber: data.phoneNumber,
          email: data.email,
          address: data.address,
        };
      }
  
      const handleNext = (data: IUserFormData) => {
        const userInfo = convertToUserInfo(data);
        setUserData(userInfo);
        setActiveStep(1);
    };
  
    const handleSubmit = (data: FamilyData) => {
      setFamilyData(data);
      setActiveStep(activeStep + 1);
    };
  
    return (
      <Box style={{ width: '600px' }} mt={2}>
        <FormStepper activeStep={activeStep} steps={steps} />
        {activeStep === 0 && (
          <UserRegistrationForm
            userData={formData.userInfo} 
            onNext={handleNext}
          />
        )}
        {activeStep === 1 && (
          <FamilyRegistrationForm
            familyData={formData.familyInfo} 
            onSubmit={handleSubmit}
          />
        )}
        {activeStep === 2 && userData && (
          <FormPreview userInfo={userData} familyInfo={familyData} />
        )}
      </Box>
    );
  }

export default RegistrationForm;
