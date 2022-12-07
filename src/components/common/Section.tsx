import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

type SectionProps = {
    titleOne: string;
    titleTwo: string;
};

export function Section({
    titleOne,
    titleTwo,
    children,
}: SectionProps & PropsWithChildren) {
    return (
        <Box sx={{ mt: 4 }}>
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
