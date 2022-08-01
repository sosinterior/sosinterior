import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AllProjects from '@/components/AllProjects'
import HeaderArea from '@/components/headerArea'
import Footer from '@/components/footer'
import Header from '@/components/header'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '@fancyapps/ui/dist/fancybox.css'
import { useTranslation } from 'next-i18next'

const Projects: NextPage = () => {
    // Hooks
    const { t } = useTranslation(['common'])

    return (
        <>
            <Header />
            <main>
                <HeaderArea title={t('projects')} imageUrl="/images/headers/projects.jpg" />
                <AllProjects />
            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['projects', 'common'])),
        },
    }
}

export default Projects
