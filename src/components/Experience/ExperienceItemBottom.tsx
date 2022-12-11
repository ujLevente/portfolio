import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, Typography } from '@mui/material';
import { ExperienceType } from './Experience';

export function ExperienceItemBottom({
    responsibilities,
}: Pick<ExperienceType, 'responsibilities'>) {
    return (
        <Box sx={{ position: 'relative' }}>
            {responsibilities.map((item) => (
                <Box
                    key={item}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        left: '-8px',
                    }}
                >
                    <ArrowRightIcon sx={{ color: 'secondary.light' }} />
                    <Typography>{item}</Typography>
                </Box>
            ))}
        </Box>
    );
}
