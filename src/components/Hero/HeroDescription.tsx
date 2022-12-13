import { Box, styled, Typography } from '@mui/material';
import { Social } from './Social';

export function HeroDescription() {
    return (
        <ContainerBox>
            <Typography variant="h3" gutterBottom>
                - my name is
            </Typography>
            <Typography variant="h1" sx={{ mb: 1.5 }}>
                Új Levente
            </Typography>
            <Typography
                variant="h2"
                sx={{
                    mb: 3,
                    color: 'secondary.main',
                    fontSize: '25px',
                }}
            >
                Creative front-end developer
            </Typography>
            <Typography sx={{ mb: 2 }}>
                Creative front-end developer with more than +2 years of
                experience in enterprise companies and startups. Proficient in
                Html, Tailwind Css, Javascript and React. Passionate about UI/UX
            </Typography>
            <Social />
        </ContainerBox>
    );
}

const ContainerBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
        paddingRight: 0,
        minHeight: '100vh',
    },
}));
