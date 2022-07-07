import { NextPage } from 'next'

import HeaderArea from '@/components/headerArea'
import AllNews from '@/components/AllNews'
import Footer from '@/components/footer'
import Header from '@/components/header'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const News: NextPage = () => {
    return (
        <>
            <Header />
            <main>
                <HeaderArea
                    title="Haberler"
                    backgroundPosition="center bottom -200px"
                    imageUrl="/images/headers/news.jpg"
                />
                <AllNews />
            </main>
            <Footer />
        </>
    )
}

export default News
