import { Box, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { Section } from '../common/Section';
import { ExperienceItem } from './ExperienceItem';

export type ExperienceType = {
    role: string;
    startDate: Date;
    endDate: undefined | Date;
    workedAs: string;
    name: string;
    location: string;
    technologies: string[];
    responsibilities: string[];
    url: string;
    company: string;
};

const experienceList: ExperienceType[] = [
    {
        role: 'Full stack developer',
        startDate: new Date(2016, 9 - 1),
        endDate: undefined,
        workedAs: 'Full-time (in self-employed status)',
        name: 'ViddL',
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
            'Improving overall website performance for mobile users. Improving overall website performance for mobile users. formance for mobile users. ',
            'Collaborate with back-end developers and web designers to improve usability',
            'Add voice search feature for mobile app.',
            'Add voice search feature for mobile app.',
        ],
        url: 'https://webtown.hu/?gclid=Cj0KCQiAnNacBhDvARIsABnDa6_LAXwyWKr78YSulBrj56udJN-qomB0zFwSfoG5P6dVkCVSEpFecHoaAr5fEALw_wcB',
        company: 'Cargo-Viszed Kft.',
    },
    {
        role: 'Full stack developer',
        startDate: new Date(2016, 9 - 1),
        endDate: new Date(2016, 9 - 1),
        workedAs: 'Full-time',
        name: 'Webtown',
        location: 'Budapest, Hungary',
        technologies: ['Java', 'Spring', 'JPA', 'Java EE', 'Postgres SQL'],
        responsibilities: [
            'Improving overall website performance for mobile users.',
            'Collaborate with back-end developers and web designers to improve usability',
            'Add voice search feature for mobile app.',
            'Add voice search feature for mobile app.',
        ],
        url: 'https://webtown.hu/?gclid=Cj0KCQiAnNacBhDvARIsABnDa6_LAXwyWKr78YSulBrj56udJN-qomB0zFwSfoG5P6dVkCVSEpFecHoaAr5fEALw_wcB',
        company: 'Webtown-Informatika kft.',
    },
];

export function Experience() {
    const [value, setValue] = useState(0);

    return (
        <Section titleOne="career path" titleTwo="Work Experices">
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                }}
            >
                <ExperienceTabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={(_, newValue) => setValue(newValue)}
                >
                    {experienceList.map(({ name }) => (
                        <ExperienceTab key={name} label={name} />
                    ))}
                </ExperienceTabs>
                {experienceList.map((item, index) => (
                    <ExperienceItem
                        key={item.name}
                        item={item}
                        active={index === value}
                    />
                ))}
            </Box>
        </Section>
    );
}

const ExperienceTabs = styled(Tabs)(({ theme }) => ({
    borderColor: 'divider',
    '& .MuiTabs-indicator': {
        transition: 'all 0.25s',
        transitionDelay: '0.1s',
        backgroundColor: theme.palette.secondary.main,
    },
}));

const ExperienceTab = styled(Tab)(({ theme }) => ({
    textTransform: 'initial',
    color: theme.palette.text.primary,
    minWidth: '180px',
    borderRight: `2px solid #b5afff36`,
    transition: 'all 0.25s',
    '&:focus, &:hover': {
        background: '#6158c51f',
        color: theme.palette.secondary.main,
    },
    '&.Mui-selected': {
        color: theme.palette.secondary.main,
    },
}));
