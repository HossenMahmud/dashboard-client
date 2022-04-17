import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import './ProjectDetails.css';
import { AccountCircle } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Header from '../../components/Header/Header';


const ProjectDetails = () => {
    return (
        <Box sx={{ p: 3, color: '#A4A6B3' }}>
            {/* Heading Part Start */}
            <Header
                project={'Project Details'}
                homeLink={'projectItem'}
                addLink={'addproject'}
            ></Header>
            {/* Heading Part End */}

            {/* Content */}
            <Box>
                <Grid container spacing={3}>
                    <Grid xs={12} sm={7} item>
                        <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#07090c' }}>
                            <Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", maxWidth: '520px', alignItems: 'center' }}>
                                    <Typography variant='body1'>Status</Typography>
                                    <Button variant="contained" color="info">
                                        Active
                                    </Button>
                                    <Typography variant='body1'>Category</Typography>
                                    <Button variant="contained" color="info">
                                        Website
                                    </Button>
                                </Box>
                                <Box sx={{ color: '#A4A6B3', fontSize: '10px', my: 2, textAlign: 'left' }}>
                                    <Typography variant='body1' sx={{ fontSize: '10px' }} > Created: Jan 21, 2022 </Typography>
                                    <Typography variant='body1' sx={{ fontSize: '10px' }} > Team Leader: David</Typography>
                                    <Typography variant='body1' sx={{ fontSize: '10px' }}> Priority: Low</Typography>
                                    <Typography variant='body1' sx={{ fontSize: '10px' }}> Deadline: Apr 17, 2022</Typography>
                                    <Typography variant='body1' sx={{ fontSize: '10px' }}> Bugs: 5</Typography>
                                    <Typography variant='body1' sx={{ fontSize: '10px' }}> Team: 6+</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant='h6'>Project Description</Typography>
                                <Typography variant='body1' sx={{ fontSize: '12px', color: 'white' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus interdum ornare lectus lobortis curabitur felis, condimentum arcu dis. Porttitor aliquam tellus ut pulvinar quis. Vitae arcu volutpat id est tristique consequat. Ligula pretium vel in nunc quis odio vel amet. Pellentesque in eget eu sed nisl massa augue ornare eget. Elit eu gravida mauris, orci. Sapien laoreet nunc dolor tortor vitae, feugiat. Scelerisque adipiscing consequat lectus purus donec feugiat. Turpis leo bibendum et accumsan mi. Nulla arcu massa facilisis quisque id sed. Tortor auctor cras feugiat sed massa cursus tempus.
                                    In tellus sapien tincidunt viverra nisi et. Blandit odio ullamcorper maecenas dictum iaculis. Neque, feugiat ut venenatis id sed quis eget. Turpis facilisi volutpat adipiscing pretium enim montes, suscipit. Purus mauris lobortis consectetur congue. Dignissim viverra tincidunt ipsum tellus. Dictum id at pulvinar arcu massa dui dolor. Magnis pellentesque nunc non et, dictumst tellus eget tincidunt. Enim eget posuere aliquet dictum accumsan.
                                </Typography>
                            </Box>

                            {/* Realtime Chating Message start */}
                            <Box sx={{ textAlign: 'left', mt: 3 }}>
                                <Typography variant='h6'>Message</Typography>

                                <Box sx={{ py: 5, px: 2, backgroundColor: '#262E41', borderRadius: 2 }}>
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                            <TextField id="input-with-sx" label="With sx" variant="standard" />
                                            <Button variant="contained" startIcon={<SendIcon />}>

                                            </Button>

                                        </Box>
                                    </Box>
                                </Box>

                            </Box>
                            {/* Realtime Chating Message end */}
                        </Box>
                    </Grid>

                    <Grid xs={12} sm={5} item>
                        <Box sx={{ color: '#A4A6B3', textAlign: 'left', p: 3, borderRadius: 2, backgroundColor: '#07090c' }}>
                            <Typography variant='h6' sx={{ mb: 2, color: '#A4A6B3', fontSize: '24px' }}>Client Details</Typography>
                            <Typography variant='body1' sx={{ fontSize: '10px' }} > Created: Jan 21, 2022 </Typography>
                            <Typography variant='body1' sx={{ fontSize: '10px' }} > Team Leader: David</Typography>
                            <Typography variant='body1' sx={{ fontSize: '10px' }}> Priority: Low</Typography>
                            <Typography variant='body1' sx={{ fontSize: '10px' }}> Deadline: Apr 17, 2022</Typography>
                            <Typography variant='body1' sx={{ fontSize: '10px' }}> Bugs: 5</Typography>
                        </Box>
                        <Box sx={{ color: '#A4A6B3', textAlign: 'left', p: 3, mt: 3, borderRadius: 2, backgroundColor: '#07090c' }}>
                            <Typography variant='h6' sx={{ mb: 2, color: '#A4A6B3', fontSize: '24px' }}>Project Tags</Typography>
                            <Button sx={{ borderRadius: 5, fontSize: '10px', m: 1 }} variant="contained" startIcon={<AddIcon />}>
                                AddIcon
                            </Button>
                            <Button sx={{ borderRadius: 5, fontSize: '10px', m: 1 }} variant="contained" startIcon={<AddIcon />}>
                                Animals & Pets
                            </Button>
                            <Button sx={{ borderRadius: 5, fontSize: '10px', m: 1 }} variant="contained" startIcon={<AddIcon />}>
                                Architechture
                            </Button>
                            <Button sx={{ borderRadius: 5, fontSize: '10px', m: 1 }} variant="contained" startIcon={<AddIcon />}>
                                Art
                            </Button>
                            <Button sx={{ borderRadius: 5, fontSize: '10px', m: 1 }} variant="contained" startIcon={<AddIcon />}>
                                Cars & Motocycles
                            </Button>
                            <Button sx={{ borderRadius: 5, fontSize: '10px', m: 1 }} variant="contained" startIcon={<AddIcon />}>
                                Everything
                            </Button>
                            <Button sx={{ borderRadius: 5, fontSize: '10px', m: 1 }} variant="contained" startIcon={<AddIcon />}>
                                Gifts
                            </Button>
                            <Button sx={{ borderRadius: 5, fontSize: '10px', m: 1 }} variant="contained" startIcon={<AddIcon />}>
                                Celebrities
                            </Button>
                        </Box>

                        <Box sx={{ color: '#A4A6B3', textAlign: 'left', mt: 3, p: 3, borderRadius: 2, backgroundColor: '#07090c', height: '300px' }}>
                            <Typography variant='h6' sx={{ mb: 2, color: '#A4A6B3', fontSize: '24px' }}>Project Files</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', my: 1 }}>
                                <FileCopyIcon />
                                <Typography sx={{ fontSize: '12px', color: '#fff', ml: 1 }} variant='body1'>Project Documents.pdf</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', my: 1 }}>
                                <FileCopyIcon />
                                <Typography sx={{ fontSize: '12px', color: '#fff', ml: 1 }} variant='body1'>Project Documents.pdf</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', my: 1 }}>
                                <FileCopyIcon />
                                <Typography sx={{ fontSize: '12px', color: '#fff', ml: 1 }} variant='body1'>Project Documents.pdf</Typography>
                            </Box>

                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};

export default ProjectDetails;