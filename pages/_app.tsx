import { CssBaseline, ThemeProvider } from '@mui/material';
import { Inter, Plus_Jakarta_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../src/components/Layout';
import { theme } from '../src/theme';

export const inter = Inter({ subsets: ['latin'] });
export const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

const SSRFontFamilyConfig = `
    .MuiTypography-root {
        font-family: ${inter.style.fontFamily};
    }
    .MuiTypography-h1.MuiTypography-root, .MuiTypography-h2.MuiTypography-root, .MuiTypography-h4.MuiTypography-root {
        font-family: ${plusJakartaSans.style.fontFamily};
    }
`;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Új Levente - Full Stack Developer</title>
                <meta
                    name="description"
                    content="Full Stack Developer Portfolio"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <style jsx global>
                {SSRFontFamilyConfig}
            </style>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}
