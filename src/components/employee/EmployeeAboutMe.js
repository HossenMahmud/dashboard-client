import { Box, Typography } from '@mui/material';
import React from 'react';

const EmployeeAboutMe = () => {
    return (
        <Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                <Box sx={{ p: 2, border: '1px dashed #A4A6B3', textAlign: 'left', borderRadius: 3 }}>
                    <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '12px', mb: 1 }}>FullName</Typography>
                    <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '16px' }}>Hossen Mahmud</Typography>
                </Box>
                <Box sx={{ p: 2, border: '1px dashed #A4A6B3', textAlign: 'left', borderRadius: 3 }}>
                    <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '12px', mb: 1 }}>Email</Typography>
                    <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '14px' }}>email@gmail.com</Typography>
                </Box>
                <Box sx={{ p: 2, border: '1px dashed #A4A6B3', textAlign: 'left', borderRadius: 3 }}>
                    <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '12px', mb: 1 }}>Location</Typography>
                    <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '14px' }}>Dhaka,Mohammadpur</Typography>
                </Box>
            </Box>

            <Box>
                <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '14px', mt: 5, textAlign: 'left' }}>Career Summary</Typography>
                <Typography variant='body1' sx={{ color: '#fff', fontSize: '12px', mt: 2, textAlign: 'left' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin habitasse sit vitae quam quam ullamcorper congue pharetra. Tempus accumsan integer dignissim lorem. Rhoncus leo et lorem diam vitae. Sagittis, feugiat viverra eu eget est id. Orci sem maecenas vivamus pretium. In consequat a at egestas sit eget. Elit pretium lacus, sed augue sed risus.

                    Arcu elit auctor consequat, mauris rhoncus ridiculus dignissim. Adipiscing nisl a, ut lobortis. Felis nulla lorem aliquam, tortor velit turpis urna, condimentum leo. Nunc faucibus in diam arcu felis id rhoncus consectetur. Aliquam sed in et semper arcu consequat quisque nunc viverra. Commodo non at eleifend auctor enim diam. Lobortis convallis odio consequat nisi, gravida malesuada tincidunt. Interdum fringilla quis nec elementum. Purus urna tincidunt eleifend ut eu, augue velit at faucibus.
                </Typography>
            </Box>

            <Box>
                <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '14px', mt: 5, textAlign: 'left' }}>Description:</Typography>
                <Typography variant='body1' sx={{ color: '#fff', fontSize: '12px', mt: 2, textAlign: 'left' }}>
                    Arcu elit auctor consequat, mauris rhoncus ridiculus dignissim. Adipiscing nisl a, ut lobortis. Felis nulla lorem aliquam, tortor velit turpis urna, condimentum leo. Nunc faucibus in diam arcu felis id rhoncus consectetur. Aliquam sed in et semper arcu consequat quisque nunc viverra. Commodo non at eleifend auctor enim diam. Lobortis convallis odio consequat nisi, gravida malesuada tincidunt. Interdum fringilla quis nec elementum. Purus urna tincidunt eleifend ut eu, augue velit at faucibus.
                </Typography>
            </Box>

            <Box>
                <Typography variant='body1' sx={{ color: '#A4A6B3', fontSize: '14px', mt: 5, textAlign: 'left' }}>Achievements</Typography>
                <Typography variant='body1' sx={{ color: '#fff', fontSize: '12px', mt: 2, textAlign: 'left' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sollicitudin habitasse sit vitae quam quam ullamcorper
                    congue pharetra. Tempus accumsan integer dignissim
                    lorem. Rhoncus leo et lorem diam vitae. Sagittis, feugiat
                    viverra eu eget est id. Orci sem maecenas vivamus pretium.
                    In consequat a at egestas sit eget. Elit pretium lacus, sed augue
                </Typography>
            </Box>
        </Box>
    );
};

export default EmployeeAboutMe;