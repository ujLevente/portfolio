import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Link, styled, Typography } from '@mui/material';
import { format } from 'date-fns';
import { inter } from '../../../pages/_app';
import { ExperienceType } from './Experience';

export function ExperienceItemHeader(
    props: Pick<
        ExperienceType,
        'company' | 'role' | 'url' | 'endDate' | 'startDate' | 'location'
    >
) {
    const { company, role, url, startDate, endDate, location } = props;

    const createTimeInterval = () => {
        let result = `${format(new Date(startDate), 'MMMM yyyy')} - `;

        result += endDate
            ? format(new Date(startDate), 'MMMM yyyy')
            : 'Present';

        return result;
    };

    return (
        <>
            <Typography variant="h4" sx={{ mr: 1, display: 'inline-block' }}>
                {role}
            </Typography>
            <CompanyLink href={url} target="_blank" variant="h4">
                <span>@</span> {company}
            </CompanyLink>
            <LocationBox>
                <LocationOnIcon sx={{ mr: 0.5, fontSize: '16px' }} />
                <Typography variant="body2">{location}</Typography>
            </LocationBox>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {createTimeInterval()}
            </Typography>
        </>
    );
}

const CompanyLink = styled(Link)(({ theme }) => ({
    color: theme.palette.secondary.main,
    transition: 'opacity 0.3s',
    display: 'inline-block',
    '&:hover': {
        opacity: 0.7,
    },
    '& span': {
        // Plus Jakarta Sans font family places @ too much below
        lineHeight: '18px',
        fontFamily: inter.style.fontFamily,
    },
}));

const LocationBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
}));
