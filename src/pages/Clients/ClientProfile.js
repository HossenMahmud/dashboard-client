import { Grid } from '@mui/material';
import React from 'react';
import ClientProfileHead from '../../components/clients/ClientProfileHead';
import ClientRight from '../../components/clients/ClientRight';
import SubNav2 from '../../components/subNav/SubNav2';
import { LayoutContiner } from '../../styles/MetarialStyles';


const ClientProfile = () => {
    return (
        <LayoutContiner >
            <SubNav2 project="Client Profile" />
            <Grid container spacing={2}>
                <Grid xs={12} md={5} lg={4} item>
                    <ClientProfileHead />
                </Grid>
                <Grid xs={12} md={7} lg={8} item>
                    <ClientRight></ClientRight>
                </Grid>
            </Grid>
        </LayoutContiner >
    );
};

export default ClientProfile;