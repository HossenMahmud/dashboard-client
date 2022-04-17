import { Grid } from '@mui/material';
import React from 'react';
import SubNav2 from '../../components/subNav/SubNav2';
import { LayoutContiner } from '../../styles/MetarialStyles';
import EmployeeProfileHead from "../../components/employee/EmployeeProfileHead";
import EmployeeRight from '../../components/employee/EmployeeRight';

const EmployeeProfile = () => {
    return (
        <LayoutContiner>
            <SubNav2 project="Employee Profile" />
            <Grid container spacing={2}>
                <Grid xs={12} md={5} lg={4} item>
                    <EmployeeProfileHead />
                </Grid>
                <Grid xs={12} md={7} lg={8} item>
                    <EmployeeRight></EmployeeRight>
                </Grid>
            </Grid>
        </LayoutContiner>
    );
};

export default EmployeeProfile;