import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { NextPage } from 'next'

// Custom
import HomeSliderBottom from '@/components/homeSliderBottom'
import LatestProjects from '@/components/latestProjects'
import HomeServices from '@/components/homeServices'
import HomeSlider from '@/components/homeSlider'
import HomeNew from '@/components/homeNew'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <main>
                <HomeSlider />
                <HomeSliderBottom />
                <HomeNew />
                <LatestProjects />
                <HomeServices />
            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['home', 'common'])),
        },
    }
}

export default Home
