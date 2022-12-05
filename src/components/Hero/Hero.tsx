import { Box, Grid, Typography } from '@mui/material';
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
                    <Typography variant="h1" gutterBottom>
                        Új Levente
                    </Typography>
                    <Typography>
                        Creative front-end developer with more than +2 years of
                        experience in enterprise companies and startups.
                        Proficient in Html, Tailwind Css, Javascript and React.
                        Passionate about UI/UX
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.gridItem}></Grid>
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
}));
