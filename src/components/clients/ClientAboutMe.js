import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ClientProject from './ClientProject';

const ClientAboutMe = () => {
    const [projects, setProjects] = useState([1, 2]);
    return (
        <Box>
            <Box sx={{ p: 2 }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{ p: 1, border: '1px dashed #A4A6B3', borderRadius: 3, textAlign: "center", p: 2 }}>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '12px', mb: 1 }}>FullName</Typography>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '16px' }}> Himel </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{ p: 1, border: '1px dashed #A4A6B3', borderRadius: 3, textAlign: "center", p: 2 }}>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '12px', mb: 1 }}>Email</Typography>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '16px' }}>email.gamail.com</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{ p: 1, border: '1px dashed #A4A6B3', borderRadius: 3, textAlign: "center", p: 2 }}>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '12px', mb: 1 }}>Location</Typography>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '16px' }}>Dhaka,Bangladesh</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{ p: 1, border: '1px dashed #A4A6B3', borderRadius: 3, textAlign: "center", p: 2 }}>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '12px', mb: 1 }}>Company Name</Typography>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '16px' }}>A-Z Companey</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{ p: 1, border: '1px dashed #A4A6B3', borderRadius: 3, textAlign: "center", p: 2 }}>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '12px', mb: 1 }}>Currency</Typography>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '16px' }}>Tala</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{ p: 1, border: '1px dashed #A4A6B3', borderRadius: 3, textAlign: "center", p: 2 }}>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '12px', mb: 1 }}>Billing System</Typography>
                            <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '16px' }}>Online</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Typography variant='h4' sx={{ color: '#A4A6B3', fontSize: '24px', my: 5, textAlign: 'left' }}>Projects</Typography>
                <Box>
                    {
                        projects.map((clientpro, index) => <ClientProject key={index}></ClientProject>)
                    }

                </Box>
            </Box>
        </Box>
    );
};

export default ClientAboutMe;