import { Box, styled, Typography } from '@mui/material';
import { HeroDescription } from './HeroDescription';
import { HeroImage } from './HeroImage';

export function Hero() {
    return (
        <ContainerBox>
            <HeroDescription />
            <HeroImage />
            <ScrollDown>Scroll</ScrollDown>
        </ContainerBox>
    );
}

const ContainerBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        height: 'initial',
        paddingTop: theme.spacing(20),
    },
    [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(12),
    },
}));

const ScrollDown = styled(Typography)(({ theme }) => ({
    transform: 'translate(0, -50%)',
    left: '50%',
    position: 'absolute',
    color: 'white',
    padding: `${theme.spacing(5)} 20px 0 20px`,
    bottom: theme.spacing(1),
    '&:hover': {
        cursor: 'pointer',
        '&:before': {
            top: '5px',
        },
    },
    '&:before': {
        top: 0,
        content: '""',
        position: 'absolute',
        borderLeft: '2px solid white',
        borderBottom: '2px solid white',
        height: '24px',
        width: '24px',
        // 2px = border width
        transform: 'translate(calc(50% - 2px), 0) rotate(-45deg)',
        transition: 'top 0.3s',
        transitionDelay: '0.05s',
    },
}));
