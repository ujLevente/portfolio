import { Components } from '@mui/material';
import { defaultTheme } from './default-theme';

export const components: Components = {
    MuiTypography: {
        styleOverrides: {
            gutterBottom: {
                marginBottom: 16,
            },
        },
    },
    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                padding: '0 8px',
            },
        },
    },
    MuiLink: {
        styleOverrides: {
            root: {
                textDecoration: 'none',
                color: defaultTheme.palette.text.primary,
                transition: 'color 0.2s',
                '&:hover': {
                    color: defaultTheme.palette.secondary.main,
                },

                '&.uncolored': {
                    color: defaultTheme.palette.text.primary,
                    transition: 'opacity 0.3s',
                    '&:hover': {
                        opacity: 0.75,
                    },
                },
            },
        },
    },
};
