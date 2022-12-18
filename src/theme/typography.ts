import { TypographyOptions } from '@mui/material/styles/createTypography';
import { defaultTheme } from './default-theme';

export const typography: TypographyOptions = {
    h1: {
        fontWeight: 700,
        fontSize: '44px',
        lineHeight: '55.44px',
        color: defaultTheme.palette.text.primary,
        [defaultTheme.breakpoints.down('sm')]: {
            fontSize: '32px',
        },
    },
    h2: {
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '45.36px',
        color: defaultTheme.palette.text.primary,
    },
    h3: {
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '24px',
        letterSpacing: '7.5px',
        textTransform: 'uppercase',
        color: '#656D72',
    },
    h4: {
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '23px',
        color: 'white',
    },
    body1: {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '32px',
    },
    body2: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '27px',
    },
    button: {
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '32px',
    },
};
