import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { makeStyles } from 'tss-react/mui';

export function Hero() {
    const { classes } = useStyles();

    return (
        <Box sx={{ height: '100vh' }}>
            <Grid container sx={{ height: 'inherit' }}>
                <Grid item sm={12} md={6} className={classes.gridItem}>
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
                    <Typography>
                        Creative front-end developer with more than +2 years of
                        experience in enterprise companies and startups.
                        Proficient in Html, Tailwind Css, Javascript and React.
                        Passionate about UI/UX
                    </Typography>
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={6}
                    className={classes.gridItem}
                    sx={{
                        alignItems: 'end',
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 10,
                            backgroundColor: '#EAE6FE',
                        }}
                        className={classes.imageShape}
                    >
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
                    <Box
                        sx={{
                            position: 'absolute',
                            backgroundColor: '#7E74F1',
                            transform: 'rotate(-9.55deg)',
                        }}
                        className={classes.imageShape}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

const useStyles = makeStyles()(() => ({
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    imageShape: {
        borderRadius: '16px',
        width: '336px',
        height: '400px',
    },
}));
