import { Box, styled, Typography } from '@mui/material';
import { socialLinksHero } from '../../constants';
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
                    fontSize: { xs: '20px', md: '25px' },
                }}
            >
                I develop Mobile <span style={{ color: '#f1f1f1' }}>&</span> Web
                apps.
            </Typography>
            <Typography
                sx={{
                    mb: 2,
                    fontSize: { xs: '14px', md: '16px' },
                    lineHeight: { xs: '27px', md: '32px' },
                }}
            >
                I&#39;m a{' '}
                <b style={{ color: '#7e74f1' }}>Full Stack Developer</b> with
                close to 4 years of experience, seasoned in building web, mobile
                application and developing backend APIs, mainly with NodeJS and
                React.
            </Typography>
            <Social socialLinks={socialLinksHero} />
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
        paddingBottom: '10vh',
    },
}));
