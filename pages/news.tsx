import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { NextPage } from 'next'

import HeaderArea from '@/components/headerArea'
import AllNews from '@/components/AllNews'
import Footer from '@/components/footer'
import Header from '@/components/header'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const News: NextPage = () => {
    // Hooks
    const { t } = useTranslation(['common'])

    return (
        <>
            <Header />
            <main>
                <HeaderArea
                    title={t('news')}
                    backgroundPosition="center bottom -200px"
                    imageUrl="/images/headers/news.jpg"
                />
                <AllNews />
            </main>
            <Footer />
        </>
    )
}

export const getServerSideProps = async ({ locale, req }: { locale: string; req: Request }) => {
    if (req.url.includes('.html')) {
        return {
            redirect: {
                destination: '/news',
                statusCode: 301,
            },
        }
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, ['news', 'common'])),
        },
    }
}

export default News
