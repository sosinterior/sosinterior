import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyles, createStylesServer } from '@mantine/next'

const stylesServer = createStylesServer()

const _document = () => {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" async />
            </body>
        </Html>
    )
}

export const getInitialProps = async (ctx: DocumentContext) => {
    const initialProps = await Document.getInitialProps(ctx)
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                <ServerStyles html={initialProps.html} server={stylesServer} />
            </>
        ),
    }
}

export default _document
