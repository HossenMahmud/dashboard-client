import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import EmployeeAboutMe from './EmployeeAboutMe';
import EmployeeSetting from './EmployeeSetting';

const EmployeeRight = () => {
    const [about, setAbout] = useState(true);
    return (
        <Box sx={{ backgroundColor: "#262E41", borderRadius: 2, p: 3 }}>
            <Box sx={{ mb: 5 }}>
                <Button sx={{ color: '#A4A6B3', fontSize: '14px' }} variant="text" onClick={(e) => setAbout(true)}>About Me</Button>
                <Button sx={{ color: '#A4A6B3', fontSize: '14px', ml: 3 }} variant="text" onClick={(e) => setAbout(false)} startIcon={<SettingsIcon />} > Setting </Button>
            </Box>

            {
                about ? <EmployeeAboutMe></EmployeeAboutMe> : <EmployeeSetting></EmployeeSetting>

            }

        </Box>
    );
};

export default EmployeeRight;