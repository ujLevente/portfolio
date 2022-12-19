import { LinkedIn, GitHub } from '@mui/icons-material';
import { Box, Link } from '@mui/material';
import { UpworkIcon } from '../common/icons/UpworkIcon';

const socialLinks = [
    {
        href: 'https://www.linkedin.com/in/%C3%BAj-levente/',
        Icon: LinkedIn,
    },
    {
        href: 'https://www.linkedin.com/in/%C3%BAj-levente/',
        Icon: GitHub,
    },
    {
        href: 'https://www.upwork.com/',
        Icon: UpworkIcon,
    },
];

export function Social() {
    return (
        <Box
            sx={{
                position: 'relative',
                left: '-10px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {socialLinks.map(({ Icon, href }) => (
                <Link
                    href={href}
                    target="_blank"
                    key={href}
                    sx={{ display: 'inline-block', padding: '10px' }}
                    className="uncolored"
                >
                    <Icon />
                </Link>
            ))}
        </Box>
    );
}
