import { NextPage } from 'next'

import { Anchor, Box, Center, Container, createStyles, Divider, Grid, Image, Text } from '@mantine/core'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HeaderArea from '@/components/headerArea'
import Footer from '@/components/footer'
import Header from '@/components/header'
import colors from '@/theme/colors'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const useStyles = createStyles(theme => ({
    title: {
        color: colors.antrazit,
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 24,
    },
    content: {
        color: colors.antrazit,
        textAlign: 'center',
        fontWeight: 400,
        marginTop: 24,
        fontSize: 14,
    },
    profileItem: {
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            flexBasis: '50%',
            maxWidth: '50%',
            width: '50%',
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexBasis: '100%',
            maxWidth: '100%',
            width: '100%',
        },
    },
    profileItemDescription: {
        paddingLeft: 100,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            paddingLeft: 20,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingRight: 8,
            paddingLeft: 8,
        },
    },
    profile: {
        backgroundPosition: 'center',
        justifyContent: 'flex-end',
        backgroundSize: 'cover',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: 24,
        maxWidth: '100%',
        display: 'flex',
        height: 600,
        '&::before': {
            borderLeft: '1px solid #fff',
            borderTop: '1px solid #fff',
            transition: 'all .3s',
            position: 'absolute',
            display: 'block',
            content: "''",
            height: 100,
            width: 100,
            left: 20,
            top: 20,
        },
        '&::after': {
            borderBottom: '1px solid #fff',
            borderRight: '1px solid #fff',
            transition: 'all .3s',
            position: 'absolute',
            display: 'block',
            content: "''",
            height: 100,
            bottom: 20,
            width: 100,
            right: 20,
        },
        '&:hover': {
            '&::before': {
                height: 150,
                width: 150,
            },
            '&::after': {
                height: 150,
                width: 150,
            },
            figure: {
                scale: '1.2',
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                    scale: '1.1',
                },
            },
        },
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
        figure: {
            transition: 'scale .8s',
            height: '100%',
            div: {
                height: '100%',
            },
            img: {
                width: '100% !important',
                height: '100% !important',
            },
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,.2)',
            transition: 'all .2s',
            position: 'absolute',
            display: 'block',
            content: "''",
            bottom: 0,
            right: 0,
            left: 0,
            top: 0,
        },
    },
    name: {
        transition: 'all .2s',
        position: 'relative',
        fontWeight: 500,
        color: '#fff',
        fontSize: 20,
    },
    userTitle: {
        transition: 'all .2s',
        position: 'relative',
        fontStyle: 'italic',
        marginBottom: 24,
        fontWeight: 300,
        color: '#fff',
        fontSize: 14,
    },
    description: {
        color: colors.antrazit,
        letterSpacing: '1px',
        lineHeight: '24px',
        fontWeight: 400,
        fontSize: 14,
    },
    links: {
        textDecoration: 'underline',
        display: 'inline-block',
        color: colors.antrazit,
        fontWeight: 300,
        marginTop: 12,
        fontSize: 14,
    },
}))

const About: NextPage = () => {
    // Hooks
    const { t } = useTranslation(['about', 'common'])
    const { classes } = useStyles()

    return (
        <>
            <Header />
            <main>
                <HeaderArea title={t('about', { ns: 'common' })} imageUrl="/images/headers/about.jpg" />

                <Box sx={{ marginTop: 100 }}>
                    <Container size="xl">
                        <Center>
                            <Text className={classes.title}>{t('title1')}</Text>
                        </Center>

                        <Center>
                            <Text className={classes.content}>{t('content1')}</Text>
                        </Center>
                    </Container>

                    <Divider my={44} />

                    <Container size="xl">
                        <Center>
                            <Text className={classes.title}>{t('title2')}</Text>
                        </Center>

                        <Center>
                            <Text className={classes.content}>{t('content2')}</Text>
                        </Center>
                    </Container>

                    <Divider my={44} />

                    <Container size="xl">
                        <Center>
                            <Text className={classes.title}>{t('title3')}</Text>
                        </Center>

                        <Center>
                            <Text className={classes.content}>{t('content3')}</Text>
                        </Center>
                    </Container>

                    <Divider my={44} />

                    <Container size="xl">
                        <Grid columns={3} align="center">
                            <Grid.Col className={classes.profileItem} span={1}>
                                <Box className={classes.profile}>
                                    <Image className={classes.image} alt="Serra Özbay" src="/images/portre.jpg" />
                                    <Text className={classes.name}>Serra Özbay</Text>
                                    <Text className={classes.userTitle}>{t('foundingArchitect')}</Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col className={`${classes.profileItem} ${classes.profileItemDescription}`} span={2}>
                                <Text className={classes.description}>{t('about')}</Text>
                                <Link
                                    href="http://www.haberturk.com/yasam/haber/1300953-evlerde-sonbahar-detoksu"
                                    passHref
                                >
                                    <Anchor className={classes.links}>{t('newspaper')}</Anchor>
                                </Link>
                                <Text className={classes.links} mx={5}>
                                    |
                                </Text>
                                <Link
                                    href="http://www.haberturk.com/yasam/haber/1300953-evlerde-sonbahar-detoksu"
                                    passHref
                                >
                                    <Anchor className={classes.links}>Buseterim.com.tr</Anchor>
                                </Link>
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Box>
            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['about', 'common'])),
        },
    }
}

export default About
