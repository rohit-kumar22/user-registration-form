import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

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

interface DataPreviewProps {
    userInfo: UserInfo;
    familyInfo: FamilyMember[];
}

const FormPreview: React.FC<DataPreviewProps> = ({ userInfo, familyInfo }) => {
    return (
        <Box mt={2}>
            <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        User Information
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography><Box component="span" sx={{fontWeight:700}}> Name: </Box> {userInfo.firstName}{userInfo.lastName}</Typography>
                            <Typography><Box component="span" sx={{fontWeight:700}}>Parent Name: </Box>{userInfo.parentName}</Typography>
                            <Typography><Box component="span" sx={{fontWeight:700}}>Phone: </Box>{userInfo.phoneNumber}</Typography>
                            <Typography><Box component="span" sx={{fontWeight:700}}>Email: </Box>{userInfo.email}</Typography>
                            <Typography><Box component="span" sx={{fontWeight:700}}>Address: </Box>{userInfo.address}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            {familyInfo.map((member, index) => (
                <Card key={index} variant="outlined" sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                           Family Member -  {member.fields.relation}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography><Box component="span" sx={{fontWeight:700}}>Name: </Box>{member.fields.firstName} {member.fields.lastName}</Typography>
                                <Typography><Box component="span" sx={{fontWeight:700}}>Phone: </Box>{member.fields.phoneNumber}</Typography>
                                <Typography><Box component="span" sx={{fontWeight:700}}>Email: </Box>{member.fields.email}</Typography>
                                <Typography><Box component="span" sx={{fontWeight:700}}>Address: </Box>{member.fields.address}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default FormPreview;
