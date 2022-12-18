import { Box, Chip, Grid, styled, Typography } from '@mui/material';
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
        <Section titleOne="title one" titleTwo="Skills" id="skillset">
            <Typography
                variant="h4"
                sx={{ fontSize: '20px', mb: 3, color: 'text.primary' }}
            >
                Hard skills
            </Typography>
            <Grid container spacing={2}>
                {hardSkillList.map(({ name, img }) => (
                    <Grid item key={name} sm="auto" md={3} lg={2}>
                        <HardSkillsBox>
                            <Image
                                src={img}
                                alt={name}
                                width="30"
                                height="30"
                                style={{ objectFit: 'contain' }}
                            />
                            <Typography sx={{ ml: 1 }}>{name}</Typography>
                        </HardSkillsBox>
                    </Grid>
                ))}
            </Grid>
            <Typography
                variant="h4"
                sx={{
                    fontSize: '20px',
                    mt: 6,
                    mb: 3,
                    color: 'text.primary',
                }}
            >
                Soft skills
            </Typography>
            <Grid container spacing={2}>
                {softSkills.map((item) => (
                    <Grid item key={item}>
                        <Chip size="medium" label={item} variant="outlined" />
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

const HardSkillsBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '8px',
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
    transition: 'background 0.5s',
    '&:hover': {
        background: '#7e74f17a',
    },
}));
