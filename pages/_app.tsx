import type { AppProps } from 'next/app'
import Head from 'next/head'

import { MantineProvider } from '@mantine/core'

import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>SOSInterior</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <MantineProvider
                theme={{ colorScheme: 'light', fontFamily: "'Poppins', sans-serif" }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Component {...pageProps} />
            </MantineProvider>
        </>
    )
}

export default MyApp
