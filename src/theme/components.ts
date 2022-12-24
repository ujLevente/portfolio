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
                    color: defaultTheme.palette.text.secondary,
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
    MuiTextField: {
        styleOverrides: {
            root: {
                marginBottom: '3px',
                '& fieldset': {
                    borderColor: defaultTheme.palette.text.secondary,
                },
                '& textarea.Mui-disabled, input.Mui-disabled': {
                    color: defaultTheme.palette.text.secondary,
                    '-webkit-text-fill-color': 'unset',
                },
                '& .MuiInputBase-root.Mui-disabled fieldset': {
                    borderColor: defaultTheme.palette.text.secondary,
                },
            },
        },
    },
    MuiFormLabel: {
        styleOverrides: {
            root: {
                color: defaultTheme.palette.text.secondary,
                '&:hover': {
                    color: 'blue',
                },
                '&.Mui-disabled': {
                    color: defaultTheme.palette.text.secondary,
                },
                '&.Mui-focused': {
                    color: defaultTheme.palette.text.primary,
                },
                '&.Mui-error': {
                    color: defaultTheme.palette.error.main,
                },
            },
        },
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                marginTop: 0,
                height: 0,
            },
        },
    },
    MuiButtonBase: {
        styleOverrides: {
            root: {
                '&.MuiButton-containedSecondary': {
                    '&.Mui-disabled': {
                        background: '#3b339a',
                    },
                    '&:hover': {
                        background: '#7e74f1ab',
                    },
                    '& .MuiCircularProgress-root': {
                        color: defaultTheme.palette.text.primary,
                    },
                },
            },
        },
    },
    MuiDialog: {
        styleOverrides: {
            paper: {
                backgroundColor: defaultTheme.palette.background.default,
                borderRadius: '16px',
                padding: defaultTheme.spacing(3),
            },
        },
    },
};
