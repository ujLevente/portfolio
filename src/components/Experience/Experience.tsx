import { Box, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { Section } from '../common/Section';
import { ExperienceItem } from './ExperienceItem';

export type ExperienceType = {
    role: string;
    startDate: string;
    endDate: undefined | string;
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
        startDate: '2021-06',
        endDate: undefined,
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
            "Write modern, performant, maintainable code for the company's parcel delivery ecosystem",
            'Developing the courier mobile application',
            'Working on external projects',
            'Implementing design from Figma',
        ],
        url: 'https://viddl.hu/',
        company: 'Cargo-Viszed Kft.',
    },
    {
        role: 'Full stack developer',
        startDate: '2019-05',
        endDate: '2021-06',
        name: 'Webtown',
        location: 'Budapest, Hungary',
        technologies: [
            'Java',
            'JavaScript',
            'Spring',
            'JPA',
            'Java EE',
            'Postgres SQL',
        ],
        responsibilities: [
            'Developing Liferay components for enterprise company intranets',
            'Working on internal backend APIs',
            'Communicating with external and internal project owners',
        ],
        url: 'https://webtown.hu/',
        company: 'Webtown-Informatika kft.',
    },
];

export function Experience() {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Section
            titleOne="career path"
            titleTwo="Work Experiences"
            id="experience"
        >
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    minHeight: 400,
                }}
            >
                <ExperienceTabs
                    orientation={isDesktop ? 'vertical' : 'horizontal'}
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
    position: 'relative',
    '& .MuiTabs-indicator': {
        transition: 'all 0.25s',
        transitionDelay: '0.1s',
        backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('md')]: {
        '&:after': {
            content: '""',
            width: '100%',
            borderBottom: 'solid 1px #b5afff36',
            position: 'absolute',
            left: 0,
            bottom: 0,
            zIndex: -1,
        },
    },
}));

const ExperienceTab = styled(Tab)(({ theme }) => ({
    textTransform: 'initial',
    color: theme.palette.text.secondary,
    minWidth: '180px',
    transition: 'all 0.25s',
    borderRight: `2px solid #b5afff36`,

    '&:hover': {
        background: '#6158c51f',
        color: theme.palette.secondary.main,
    },
    '&.Mui-selected': {
        background: '#6158c51f',
        color: theme.palette.secondary.main,
    },

    [theme.breakpoints.down('md')]: {
        borderRight: 0,
    },
}));
