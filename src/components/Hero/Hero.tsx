import { Box, styled } from '@mui/material';
import { HeroDescription } from './HeroDescription';
import { HeroImage } from './HeroImage';

export function Hero() {
    return (
        <ContainerBox>
            <HeroDescription />
            <HeroImage />
        </ContainerBox>
    );
}

const ContainerBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        height: 'initial',
        paddingTop: theme.spacing(20),
    },
    [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(12),
    },
}));
