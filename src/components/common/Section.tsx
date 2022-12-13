import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { SectionType } from '../../utils';

type SectionProps = {
    titleOne: string;
    titleTwo: string;
    id: SectionType;
};

export function Section({
    titleOne,
    titleTwo,
    id,
    children,
}: SectionProps & PropsWithChildren) {
    return (
        <Box component="section" sx={{ py: 8 }} title={id} id={id}>
            <Typography variant="h3" gutterBottom>
                - {titleOne}
            </Typography>
            <Typography variant="h2" gutterBottom sx={{ mb: 12 }}>
                {titleTwo}
            </Typography>
            {children}
        </Box>
    );
}
