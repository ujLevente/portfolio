import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Inter, Plus_Jakarta_Sans } from '@next/font/google';
import { defaultTheme } from './default-theme';

export const inter = Inter({ subsets: ['latin'] });
export const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const typography: TypographyOptions = {
    fontFamily: inter.style.fontFamily,
    h1: {
        fontFamily: plusJakartaSans.style.fontFamily,
        fontWeight: 700,
        fontSize: '44px',
        lineHeight: '55.44px',
        color: defaultTheme.palette.text.secondary,
        [defaultTheme.breakpoints.down('sm')]: {
            fontSize: '32px',
        },
    },
    h2: {
        fontFamily: plusJakartaSans.style.fontFamily,

        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '45.36px',
        color: defaultTheme.palette.text.secondary,
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
        fontFamily: plusJakartaSans.style.fontFamily,

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
