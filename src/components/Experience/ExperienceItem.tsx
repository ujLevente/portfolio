import { Box, Chip, Grid, styled } from '@mui/material';
import { ExperienceType } from './Experience';
import { ExperienceItemBottom } from './ExperienceItemBottom';
import { ExperienceItemHeader } from './ExperienceItemHeader';

type ExperienceItemProps = {
    item: ExperienceType;
    active: boolean;
};

export function ExperienceItem({ item, active }: ExperienceItemProps) {
    const { responsibilities, technologies } = item;

    return (
        <Box role="tabpanel" hidden={!active} sx={{ flex: 1 }}>
            {active && (
                <Box sx={{ pl: { md: 5 }, pt: { xs: 5, md: 0 } }}>
                    <ExperienceItemHeader {...item} />
                    <Grid container spacing={1}>
                        {technologies.map((item) => (
                            <Grid item key={item}>
                                <Chip
                                    label={item}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <DividerBox />
                    <ExperienceItemBottom responsibilities={responsibilities} />
                </Box>
            )}
        </Box>
    );
}

const DividerBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.divider,
    margin: `${theme.spacing(3)} 0`,
}));
