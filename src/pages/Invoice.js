import { Box } from '@mui/system';
import React from 'react';
import InvoicePaper from '../components/invoice/InvoicePaper';
import SubNav from '../components/subNav/SubNav';

const invoice = () => {
    return (
        <Box sx={{ p: 3 }}>
            <SubNav project="Invoice" />
            <InvoicePaper></InvoicePaper>
        </Box>
    );
};

export default invoice;