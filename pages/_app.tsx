import '../styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../src/components/Layout';
import { theme } from '../src/theme';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
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
