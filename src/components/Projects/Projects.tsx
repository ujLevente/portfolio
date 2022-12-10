import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
    Chip,
    Grid,
    styled,
    Typography,
    Box,
    Link,
    useMediaQuery,
    useTheme,
    Button,
} from '@mui/material';
import { useState } from 'react';
import { Section } from '../common/Section';
import { FolderIcon } from '../icons/FolderIcon';

const projectList = [
    {
        title: 'Integrating Algolia Search with WordPress Multisite',
        description:
            'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
        technologies: ['Java', 'Spring', 'JPA', 'Java EE', 'Postgres SQL'],
        link: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c',
    },
    {
        title: 'Hungarian Startup University Program',
        description:
            'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
        technologies: ['Java', 'Spring', 'JPA', 'Java EE', 'Postgres SQL'],
        link: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c',
    },
    {
        title: 'Integrating Algolia Search with WordPress Multisite',
        description:
            'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
        technologies: ['Java', 'Spring', 'JPA', 'Java EE', 'Postgres SQL'],
        link: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c',
    },
    {
        title: 'Integrating Algolia Search with WordPress Multisite',
        description:
            'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
        technologies: ['Java', 'Spring', 'JPA', 'Java EE', 'Postgres SQL'],
        link: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c',
    },
    {
        title: 'Integrating Algolia Search with WordPress Multisite',
        description:
            'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
        technologies: ['Java', 'Spring', 'JPA', 'Java EE', 'Postgres SQL'],
        link: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c',
    },
    {
        title: 'Integrating Algolia Search with WordPress Multisite',
        description:
            'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
        technologies: ['Java', 'Spring', 'JPA', 'Java EE', 'Postgres SQL'],
        link: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c',
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
        <Section titleOne="my work" titleTwo="Projects">
            <Grid container spacing={3}>
                {projectsToShow.map(
                    ({ title, link, description, technologies }) => (
                        <Grid item xs={12} sm={6} md={4} key={title}>
                            <ProjectBox>
                                <ProjectTopBox>
                                    <FolderIcon />
                                    <Link
                                        href={link}
                                        target="_blank"
                                        sx={{
                                            lineHeight: 0,
                                            zIndex: 1,
                                            padding: '10px',
                                            position: 'relative',
                                            right: '-10px',
                                        }}
                                    >
                                        <OpenInNewIcon color="inherit" />
                                    </Link>
                                </ProjectTopBox>
                                <ProjectLink
                                    href={link}
                                    target="_blank"
                                    variant="h4"
                                    sx={{ color: 'white' }}
                                >
                                    {title}
                                </ProjectLink>
                                <Typography
                                    variant="body2"
                                    sx={{ mb: 3, mt: 1 }}
                                >
                                    {description}
                                </Typography>
                                {technologies.map((item) => (
                                    <Chip key={item} label={item} />
                                ))}
                            </ProjectBox>
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
    background: '#7e74f136',
    borderRadius: '8px',
    height: '100%',
    padding: `${theme.spacing(2)} ${theme.spacing(3.5)}`,
    transition: 'transform 0.3s',

    '&:hover': {
        // transform: 'translateY(-7px)',
        transform: 'scale(1.03)',
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
}));

const ProjectLink = styled(Link)(() => ({
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
}));
