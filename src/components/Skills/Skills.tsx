import { Box, Chip, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Section } from '../common/Section';

const hardSkillList = [
    {
        name: 'CSS',
        img: '/skills/css.png',
    },
    {
        name: 'JavaScript',
        img: '/skills/js.png',
    },
    {
        name: 'TypeScript',
        img: '/skills/typescript.png',
    },
    {
        name: 'React',
        img: '/skills/react.png',
    },
    {
        name: 'React Native',
        img: '/skills/react.png',
    },
    {
        name: 'React query',
        img: '/skills/tanstack.svg',
    },
    {
        name: 'Redux',
        img: '/skills/redux.png',
    },
    {
        name: 'NestJS',
        img: '/skills/nestjs.png',
    },
    {
        name: 'MongoDB',
        img: '/skills/mongo.png',
    },
    {
        name: 'Git',
        img: '/skills/git.png',
    },
    {
        name: 'NodeJS',
        img: '/skills/node.png',
    },
    {
        name: 'NextJS',
        img: '/skills/next.png',
    },
    {
        name: 'Spring',
        img: '/skills/spring.png',
    },
    {
        name: 'JPA Hybernate',
        img: '/skills/hybernate.svg',
    },
    {
        name: 'Postgres SQL',
        img: '/skills/postgres.png',
    },
    {
        name: 'Sass',
        img: '/skills/sass.png',
    },
];

const softSkills = [
    'Quick learner',
    'Patience',
    'Flexibility',
    'Respectfulness',
    'Earnestness',
    'Ability to recieve criticism well',
    'Determination',
    'Seeking development',
];

export function Skills() {
    return (
        <Section titleOne="title one" titleTwo="Skills">
            <Typography
                variant="h4"
                color="primary"
                sx={{ fontSize: '20px', mb: 3 }}
            >
                Hard skills
            </Typography>
            <Grid container spacing={2}>
                {hardSkillList.map(({ name, img }) => (
                    <Grid item key={name} xs={6} sm={4} md={3} lg={2}>
                        <Box
                            sx={{
                                display: 'flex',
                                border: `2px solid`,
                                borderColor: 'secondary.main',
                                borderRadius: '8px',
                                py: 0.5,
                                px: 1,
                            }}
                        >
                            <Image
                                src={img}
                                alt={name}
                                width="30"
                                height="30"
                                style={{ objectFit: 'contain' }}
                            />
                            <Typography sx={{ ml: 1 }}>{name}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Typography
                variant="h4"
                color="primary"
                sx={{ fontSize: '20px', my: 3 }}
            >
                Hard skills
            </Typography>
            {softSkills.map((item) => (
                <Chip key={item} label={item} />
            ))}
        </Section>
    );
}
