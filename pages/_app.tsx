import { CssBaseline, ThemeProvider } from '@mui/material';
import { Inter, Plus_Jakarta_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../src/components/Layout';
import { theme } from '../src/theme';

export const inter = Inter({ subsets: ['latin'] });
export const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

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
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}
