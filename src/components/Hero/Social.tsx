import { Box, Link } from '@mui/material';

type SocialProps = {
    socialLinks: {
        href: string;
        Icon: React.ElementType;
    }[];
};

export function Social({ socialLinks }: SocialProps) {
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
