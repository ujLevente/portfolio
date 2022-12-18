import { Box, styled, Typography } from '@mui/material';
import { scrollToSection } from '../../utils';
import { RevealWrapper } from '../common/RevealWrapper';
import { HeroDescription } from './HeroDescription';
import { HeroImage } from './HeroImage';

export function Hero() {
    return (
        <RevealWrapper>
            <ContainerBox>
                <HeroDescription />
                <HeroImage />
                <ScrollDown onClick={() => scrollToSection('experience')}>
                    Scroll
                </ScrollDown>
            </ContainerBox>
        </RevealWrapper>
    );
}

const ContainerBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        height: 'initial',
    },
}));

const ScrollDown = styled(Typography)(({ theme }) => ({
    transform: 'translate(-50%, 0)',
    left: '50%',
    position: 'absolute',
    color: theme.palette.text.primary,
    padding: `${theme.spacing(5)} 20px 0 20px`,
    bottom: theme.spacing(2),
    '&:hover': {
        cursor: 'pointer',
        '&:before': {
            top: theme.spacing(0.6),
        },
    },
    '&:before': {
        top: 0,
        content: '""',
        position: 'absolute',
        borderLeft: `2px solid ${theme.palette.text.primary}`,
        borderBottom: `2px solid ${theme.palette.text.primary}`,
        height: '24px',
        width: '24px',
        // 2px = border width
        transform: 'translate(calc(50% - 2px), 0) rotate(-45deg)',
        transition: 'top 0.3s',
        transitionDelay: '0.05s',
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));
