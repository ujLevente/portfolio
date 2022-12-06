import { Components } from '@mui/material';
import { palette } from './palette';

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
                color: palette.text?.primary,
                transition: 'opacity 0.3s',
                '&:hover': {
                    opacity: 0.75,
                },
            },
        },
    },
};
