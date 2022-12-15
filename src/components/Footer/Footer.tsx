import { GitHub } from '@mui/icons-material';
import { Box, Link } from '@mui/material';

export function Footer() {
    return (
        <Box
            sx={{
                pt: 6,
                pb: 3,
            }}
        >
            <Link
                href="https://github.com/ujLevente/portfolio"
                variant="body2"
                target="_blank"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <GitHub sx={{ fontSize: '19px', mr: 0.5 }} />
                Designed & Built by Új Levente
            </Link>
        </Box>
    );
}
