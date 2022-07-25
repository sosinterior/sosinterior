import { NextPage } from 'next'

import AllProjects from '@/components/AllProjects'
import HeaderArea from '@/components/headerArea'
import Footer from '@/components/footer'
import Header from '@/components/header'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '@fancyapps/ui/dist/fancybox.css'

const Projects: NextPage = () => {
    return (
        <>
            <Header />
            <main>
                <HeaderArea title="Projeler" imageUrl="/images/headers/projects.jpg" />
                <AllProjects />
            </main>
            <Footer />
        </>
    )
}

export default Projects
