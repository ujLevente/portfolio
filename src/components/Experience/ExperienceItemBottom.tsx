import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, styled, Typography } from '@mui/material';
import { ExperienceType } from './Experience';

export function ExperienceItemBottom({
    responsibilities,
}: Pick<ExperienceType, 'responsibilities'>) {
    return (
        <Box sx={{ position: 'relative' }}>
            {responsibilities.map((item) => (
                <ResponsibilityBox key={item}>
                    <ArrowRightIcon
                        sx={{
                            color: 'secondary.light',
                            alignSelf: 'start',
                            fontSize: '32px',
                        }}
                    />
                    <Typography>{item}</Typography>
                </ResponsibilityBox>
            ))}
        </Box>
    );
}

const ResponsibilityBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    left: theme.spacing(-1),
}));
