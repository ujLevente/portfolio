import { Timeline } from '@mui/lab';
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import { Section } from '../common/Section';
import { ExperienceTimelineItem } from './ExperienceTimelineItem';

const experienceList = [
    {
        startDate: new Date(2016, 9 - 1),
        endDate: undefined,
        name: 'Cargo-Viszed Kft.',
        workedAs: 'Full-time (in self-employed status)',
        location: 'Budapest, Hungary',
        technologies: [
            'React',
            'React Native',
            'Nestjs',
            'Nextjs',
            'Nodejs',
            'Mongo',
        ],
        responsibilities: [
            'Improving overall website performance for mobile users.',
            'Collaborate with back-end developers and web designers to improve usability',
            'Add voice search feature for mobile app.',
            'Add voice search feature for mobile app.',
        ],
    },
    {
        startDate: new Date(2016, 9 - 1),
        endDate: new Date(2016, 9 - 1),
        workedAs: 'Full-time',
        name: 'Webtown-Informatika Kft.',
        location: 'Budapest, Hungary',
        technologies: ['Java', 'Spring', 'JPA', 'Java EE', 'Postgres SQL'],
        responsibilities: [
            'Improving overall website performance for mobile users.',
            'Collaborate with back-end developers and web designers to improve usability',
            'Add voice search feature for mobile app.',
            'Add voice search feature for mobile app.',
        ],
    },
];

export function Experience() {
    return (
        <Section titleOne="career path" titleTwo="Work Experices">
            <Timeline
                position="right"
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.4,
                    },
                }}
            >
                {experienceList.map((item, index) => (
                    <ExperienceTimelineItem
                        key={item.name + item.startDate}
                        item={item}
                        latest={index === 0}
                    />
                ))}
            </Timeline>
        </Section>
    );
}
