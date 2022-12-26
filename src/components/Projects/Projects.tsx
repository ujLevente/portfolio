import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
    Grid,
    styled,
    Typography,
    Box,
    Link,
    useMediaQuery,
    useTheme,
    Button,
    Chip,
} from '@mui/material';
import { useState } from 'react';
import { FolderIcon } from '../common/icons/FolderIcon';
import { RevealWrapper } from '../common/RevealWrapper';
import { Section } from '../common/Section';

const projectList = [
    {
        title: 'Hungarian Startup University Program',
        description: `The program's aim is to introduce hungarian university students to the world of innovation
             and to give modern entrepreneurial knowledge required to manage startups.
             The program can be taken as subject in universities.`,
        //  , the web application's aim is to manage students
        //  who participate, give administrative features to universities, connecting students with mentors and to contain the curriculum.
        technologies: ['React', 'Mongo', 'NestJS'],
        link: 'https://hsup.nkfih.gov.hu/',
    },
    {
        title: 'Hungarian Startup University Program (mobile app)',
        description: `This is the mobile application, unlike the web app this is only for student, 
            it is mainly for learning the curriculum and managing the student project teams.`,
        technologies: ['React Native', 'Mongo', 'NestJS', 'Expo'],
        link: 'https://play.google.com/store/apps/details?id=hu.hsup.student&pli=1',
    },
    {
        title: 'ViddL courier app',
        description: `This is a cross platform mobile application for managing package deliveries for couriers.`,
        technologies: ['React Native', 'Mongo', 'NestJS', 'Expo'],
        link: 'https://apps.apple.com/hu/app/viddl-fut%C3%A1r/id1389044430?l=hu',
    },
    {
        title: 'SME Innovation Platform',
        description: `This is a platform to introduce SMEs to innovative enterprise management.
        Contains a curriculum and by finishing it a certificate can be achieved`,
        technologies: ['React', 'Mongo', 'NestJS'],
        link: 'https://kkv.nkfih.gov.hu/',
    },
    {
        title: 'Evita Family Support',
        description: `This application's aim is to lecture future parents about the way of 
            taking care babies and small children.`,
        technologies: ['Java', 'Spring', 'JPA', 'Java EE', 'Postgres SQL'],
        link: 'https://evita.hu/',
    },
    {
        title: 'Space ex',
        description: `(not finished) This is a web application where you are able to send your ex to space. 
            Upload a photo and the application will show your ex flying throught space, 
            the fly path is connected to satelites.`,
        technologies: ['React', 'NextJS', 'Tailwind', 'Mongo'],
        link: 'https://space-ex-git-parallax-effect-ddoman90.vercel.app/?fbclid=IwAR2yh5nB_etci8zHEQnvoLYYvf0DhnTLPcTGrMY0icc-7wOPgFxjXbe_uQg',
    },
];

const MOBILE_GRID_LIMIT = 4;
const DESKTOP_GRID_LIMIT = 6;

export function Projects() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [showMore, setShowMore] = useState(false);

    const gridLimit = isMobile ? MOBILE_GRID_LIMIT : DESKTOP_GRID_LIMIT;
    const limitedProjects = projectList.slice(0, gridLimit);
    const projectsToShow = showMore ? projectList : limitedProjects;
    const showMoreButtonVisible = projectList.length > gridLimit;

    return (
        <Section titleOne="my work" titleTwo="Projects" id="projects">
            <Grid container spacing={3}>
                {projectsToShow.map(
                    ({ title, link, description, technologies }, i) => (
                        <Grid item xs={12} sm={6} md={4} key={title}>
                            <RevealWrapper
                                delay={200 * i}
                                style={{ height: '100%' }}
                            >
                                <ProjectBox>
                                    <ProjectTopBox>
                                        <FolderIcon />
                                        <Link href={link} target="_blank">
                                            <OpenInNewIcon color="inherit" />
                                        </Link>
                                    </ProjectTopBox>
                                    <ProjectLink
                                        href={link}
                                        target="_blank"
                                        variant="h4"
                                    >
                                        {title}
                                    </ProjectLink>
                                    <Typography
                                        variant="body2"
                                        sx={{ mb: 2, mt: 1 }}
                                    >
                                        {description}
                                    </Typography>
                                    <Grid container spacing={1}>
                                        {technologies.map((item) => (
                                            <Grid item key={item}>
                                                <Chip
                                                    size="small"
                                                    variant="outlined"
                                                    label={item}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </ProjectBox>
                            </RevealWrapper>
                        </Grid>
                    )
                )}
            </Grid>
            {showMoreButtonVisible && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <Button
                        onClick={() => setShowMore((prevState) => !prevState)}
                        variant="outlined"
                        color="secondary"
                    >
                        {showMore ? 'Show less' : 'Show more'}
                    </Button>
                </Box>
            )}
        </Section>
    );
}

const ProjectBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    background: theme.palette.secondary.dark,
    borderRadius: '8px',
    height: '100%',
    padding: `${theme.spacing(2)} ${theme.spacing(3.5)}`,
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'translateY(-7px)',
    },
}));

const ProjectTopBox = styled(Box)(({ theme }) => ({
    color: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    '&> svg': {
        width: '45px',
        height: '45px',
    },
    '&> a': {
        lineHeight: 0,
        zIndex: 1,
        padding: '10px',
        position: 'relative',
        right: '-10px',
    },
    [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(2),
    },
}));

const ProjectLink = styled(Link)(({ theme }) => ({
    color: '#f1f1f1',
    '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: 0,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },
}));
