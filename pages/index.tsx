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

export default Home
