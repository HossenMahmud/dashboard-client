import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { BoxContainer } from '../../styles/MetarialStyles';
import ListMenuClient from './ListMenuClient';

const ClientProject = () => {
    return (
        <Grid xs={12} md={12} item>
            <Box
                sx={{
                    backgroundColor: "#1A202E",
                    borderRadius: 2,
                    p: 3,
                    // textAlign: "left",
                    mb: 3
                }}
            >
                <BoxContainer>
                    <Typography variant="h5" sx={{ color: "secondary.main" }}>
                        RRP Software
                    </Typography>
                    <ListMenuClient></ListMenuClient>

                </BoxContainer>
                <Typography variant="subtitle2" sx={{ color: "secondary.main" }}>
                    12 open tasks
                </Typography>
                <Typography variant="body1" sx={{ color: "secondary.main", my: 2 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam fuga, fugiat ratione obcaecati, facilis quo odio corrupti cum aliquam nobis voluptates eius sint molestias.
                </Typography>
                <BoxContainer>
                    <Box sx={{ color: "secondary.main", mb: 1 }}>
                        <Typography variant="body1">12-12-2022</Typography>
                        <Typography variant="body1">
                            Team Leader: Tanim
                        </Typography>
                        <Typography variant="body1">
                            Priority: High
                        </Typography>
                        <Typography variant="body1">
                            Deadline: 25-12-2022
                        </Typography>
                        <Typography variant="body1">Team: Himel.Sifat,Noman</Typography>
                    </Box>

                    <Box>
                        <Typography variant="body1" sx={{ color: "secondary.main", mb: 1 }}>
                            Category
                        </Typography>
                        <Button variant="contained" color="info">
                            Website
                        </Button>
                    </Box>
                </BoxContainer>
                <Box sx={{ my: 2 }}>
                    {/* <ProgressBar completed={180} maxCompleted={200} /> */}
                </Box>
            </Box>
        </Grid>
    );
};

export default ClientProject;