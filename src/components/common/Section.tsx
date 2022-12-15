import { Box, keyframes, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { SectionType } from '../../utils';
import { RevealWrapper } from './RevealWrapper';

type SectionProps = {
    titleOne: string;
    titleTwo: string;
    id: SectionType;
};

export const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export function Section({
    titleOne,
    titleTwo,
    id,
    children,
}: SectionProps & PropsWithChildren) {
    return (
        <Box component="section" sx={{ py: 8 }} title={id} id={id}>
            <RevealWrapper>
                <Typography variant="h3" gutterBottom>
                    - {titleOne}
                </Typography>
                <Typography variant="h2" gutterBottom sx={{ mb: 12 }}>
                    {titleTwo}
                </Typography>
                {children}
            </RevealWrapper>
        </Box>
    );
}
