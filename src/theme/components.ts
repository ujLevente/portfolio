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
                transition: 'color 0.3s',
                '&:hover': {
                    color: defaultTheme.palette.secondary.main,
                    cursor: 'pointer',
                },

                '&.uncolored': {
                    color: defaultTheme.palette.text.primary,
                    transition: 'opacity 0.3s',
                    '&:hover': {
                        opacity: 0.5,
                    },
                },
            },
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: 'none',
            },
        },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                height: 'initial',
            },
            outlined: {
                border: `1px solid ${defaultTheme.palette.primary.main}`,
                borderRadius: '5px',
                '&.MuiChip-sizeSmall': {
                    border: `1px solid  ${defaultTheme.palette.primary.dark}`,
                },
            },
            sizeSmall: {
                fontSize: '11px',
                '& .MuiChip-label': {
                    color: defaultTheme.palette.primary.main,
                    lineHeight: '12px',
                    padding: defaultTheme.spacing(1),
                },
            },
            sizeMedium: {
                fontSize: '14px',
                '& .MuiChip-label': {
                    lineHeight: '16px',
                    padding: `${defaultTheme.spacing(1)} ${defaultTheme.spacing(
                        2
                    )}`,
                },
            },
        },
    },
};
