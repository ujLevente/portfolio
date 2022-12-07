import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { makeStyles } from 'tss-react/mui';
import { Social } from './Social';

export function Hero() {
    const { classes, cx } = useStyles();

    return (
        <Box className={classes.flexboxContainer}>
            <Box className={classes.flexboxItem}>
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
                    experience in enterprise companies and startups. Proficient
                    in Html, Tailwind Css, Javascript and React. Passionate
                    about UI/UX
                </Typography>
                <Social />
            </Box>
            <Box className={classes.flexboxItem}>
                <Box className={cx(classes.imageShape, classes.imageContainer)}>
                    <Image
                        src="/profil.png"
                        objectFit="contain"
                        alt="profil"
                        layout="fill"
                        style={{
                            left: '-63px',
                            top: '34px',
                            transform: 'scale(1.4)',
                        }}
                    />
                </Box>
                <Box className={cx(classes.imageShape, classes.imageFigure)} />
            </Box>
        </Box>
    );
}

const useStyles = makeStyles()((theme) => ({
    flexboxContainer: {
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
    },
    flexboxItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '&:first-of-type': {
            flex: 1,
            paddingRight: '64px',
            [theme.breakpoints.down('md')]: {
                paddingRight: '16px',
            },
        },
        '&:nth-of-type(2)': {
            flex: 1,
            alignItems: 'end',
            [theme.breakpoints.down('md')]: {
                alignItems: 'center',
                marginBottom: theme.spacing(10),
            },
            [theme.breakpoints.down('sm')]: {
                marginBottom: theme.spacing(3),
            },
        },
    },
    imageShape: {
        borderRadius: '16px',
        width: '336px',
        height: '400px',
    },
    imageContainer: {
        position: 'relative',
        overflow: 'hidden',
        zIndex: 10,
        backgroundColor: '#EAE6FE',
        [theme.breakpoints.down('sm')]: {
            transform: 'scale(0.7)',
        },
    },
    imageFigure: {
        position: 'absolute',
        backgroundColor: '#7E74F1',
        transform: 'rotate(-9.55deg)',
        [theme.breakpoints.down('sm')]: {
            transform: 'rotate(-9.55deg) scale(0.7)',
        },
    },
}));
