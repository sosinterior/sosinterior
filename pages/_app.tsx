import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
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
                <GoogleReCaptchaProvider
                    reCaptchaKey="6Lcj4QUiAAAAANKlCifz9uyiYbGCPc_qE3NZqXvw"
                    scriptProps={{
                        async: false,
                        defer: false,
                        appendTo: 'head',
                        nonce: undefined,
                    }}
                >
                    <Component {...pageProps} />
                </GoogleReCaptchaProvider>
            </MantineProvider>
        </>
    )
}

export default appWithTranslation(MyApp)
