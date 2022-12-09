import { TypographyOptions } from '@mui/material/styles/createTypography';
import { defaultTheme } from './default-theme';

export const typography: TypographyOptions = {
    h1: {
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 700,
        fontSize: '44px',
        lineHeight: '55.44px',
        color: defaultTheme.palette.text.secondary,
        [defaultTheme.breakpoints.down('sm')]: {
            fontSize: '32px',
        },
    },
    h2: {
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 700,
        fontSize: '36px',
        lineHeight: '45.36px',
        color: defaultTheme.palette.text.secondary,
    },
    h3: {
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '24px',
        letterSpacing: '7.5px',
        textTransform: 'uppercase',
        color: '#656D72',
    },
    h4: {
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '23px',
        color: 'white',
    },
    body1: {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '32px',
    },
    body2: {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '27px',
    },
};
