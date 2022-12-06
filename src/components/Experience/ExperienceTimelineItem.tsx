import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from '@mui/lab';
import { Chip, Typography } from '@mui/material';
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
        <TimelineItem key={name}>
            <TimelineOppositeContent color="text.secondary">
                {createTimeInterval()}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot
                    variant={latest ? 'outlined' : 'filled'}
                    // css={(theme) =>
                    //     `border-color: ${theme.palette.azure.main};`
                    // }
                />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="body2">{name}</Typography>
                <Typography>{location}</Typography>
                {technologies.map((item) => (
                    <Chip key={item} label={item} />
                ))}
                {responsibilities.map((item) => (
                    <Typography key={item}>- {item}</Typography>
                ))}
            </TimelineContent>
        </TimelineItem>
    );
}
