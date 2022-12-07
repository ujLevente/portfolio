import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from '@mui/lab';
import { Box, Chip, Typography } from '@mui/material';
import { format } from 'date-fns';

type ExperienceTimelineItemProps = {
    item: {
        startDate: Date;
        endDate: Date | undefined;
        name: string;
        workedAs: string;
        location: string;
        technologies: string[];
        responsibilities: string[];
    };
    latest: boolean;
};

export function ExperienceTimelineItem({
    item,
    latest,
}: ExperienceTimelineItemProps) {
    const {
        responsibilities,
        endDate,
        location,
        name,
        startDate,
        technologies,
        workedAs,
    } = item;

    const createTimeInterval = () => {
        let result = `${format(new Date(startDate), 'MMMM yyyy')} - `;

        result += endDate
            ? format(new Date(startDate), 'MMMM yyyy')
            : 'Present';

        return result;
    };

    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography
                    sx={{
                        lineHeight: '24px',
                        color: 'white',
                    }}
                >
                    {createTimeInterval()}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot variant={latest ? 'outlined' : 'filled'} />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mb: 1 }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    {name}
                </Typography>
                <Typography sx={{ fontSize: '14px' }} gutterBottom>
                    {location}
                </Typography>
                {technologies.map((item) => (
                    <Chip key={item} label={item} />
                ))}
                <Box
                    sx={{
                        width: '100%',
                        height: '1px',
                        bgcolor: 'text.secondary',
                        my: 1.5,
                    }}
                />
                <Box>
                    {responsibilities.map((item) => (
                        <Typography key={item}>- {item}</Typography>
                    ))}
                </Box>
            </TimelineContent>
        </TimelineItem>
    );
}
