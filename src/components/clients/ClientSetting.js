import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { ButtonPry } from '../../styles/MetarialStyles';

const ClientSetting = () => {
    return (
        <Box>

            <Box>
                <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '18px' }}>Security Settings</Typography>
                <Box component="form" autoComplete="off">
                    <TextField type="text" fullWidth id="filled-basic" label="User Name" variant="filled" sx={{ my: 2 }} />
                    <TextField type="password" fullWidth id="filled-basic" label="Current Password" variant="filled" sx={{ mb: 2 }} />
                    <TextField type="password" fullWidth id="filled-basic" label="New Passord" variant="filled" />
                    <Button size='meduim' variant='contained' type='submit' sx={{ my: 2, color: 'blue' }}>Send</Button>
                </Box>
            </Box>

            <Box sx={{ mt: 5 }}>
                <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '18px' }}>Account Settings</Typography>
                <Box component="form" autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField type="text" fullWidth id="filled-basic" label="First Name" variant="filled" sx={{ my: 2 }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField type="text" fullWidth id="filled-basic" label="Last Name" variant="filled" sx={{ my: 2 }} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField type="text" fullWidth id="filled-basic" label="City" variant="filled" sx={{ my: 2 }} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField type="email" fullWidth id="filled-basic" label="Email" variant="filled" sx={{ my: 2 }} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField type="text" fullWidth id="filled-basic" label="Country" variant="filled" sx={{ my: 2 }} />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField type="text" fullWidth id="filled-basic" label="Address" variant="filled" sx={{ my: 2 }} />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormGroup sx={{ color: '#fff', fontSize: '12px' }}>
                                <FormControlLabel control={<Checkbox />} label="Profile Visbility for Everyone" />
                                <FormControlLabel control={<Checkbox />} label="New Task Notification" />
                                <FormControlLabel control={<Checkbox />} label="New Friend Request Notification" />

                            </FormGroup>
                        </Grid>
                    </Grid>
                    <Button size='meduim' variant='contained' sx={{ my: 2, color: 'blue' }}>Save and Changes</Button>
                </Box>
            </Box>

        </Box>
    );
};

export default ClientSetting;