import { LinkedIn, GitHub, Group } from '@mui/icons-material';
import { Box, Link } from '@mui/material';

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
        Icon: Group,
    },
];

export function Social() {
    return (
        <Box>
            {socialLinks.map(({ Icon, href }) => (
                <Link href={href} target="_blank" key={href} sx={{ mr: 2 }}>
                    <Icon />
                </Link>
            ))}
        </Box>
    );
}
