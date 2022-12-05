import { TypographyOptions } from '@mui/material/styles/createTypography';
import { palette } from './palette';

export const typography: TypographyOptions = {
    h1: {
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 700,
        fontSize: '44px',
        lineHeight: '55.44px',
        color: palette.text?.secondary,
    },
    h2: {
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 700,
        fontSize: '36px',
        lineHeight: '45.36px',
        color: palette.text?.secondary,
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
    body1: {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '32px',
    },
};
