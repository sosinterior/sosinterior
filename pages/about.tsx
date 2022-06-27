import { NextPage } from 'next'

import { Anchor, Box, Center, Container, createStyles, Divider, Grid, Image, Text } from '@mantine/core'

import HeaderArea from '@/components/headerArea'
import Footer from '@/components/footer'
import Header from '@/components/header'
import colors from '@/theme/colors'
import Link from 'next/link'

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
    const { classes } = useStyles()

    return (
        <>
            <Header />
            <main>
                <HeaderArea title="Hakkımızda" imageUrl="http://www.sosinterior.com/demos/project/2-4.jpg" />

                <Box sx={{ marginTop: 100 }}>
                    <Container size="xl">
                        <Center>
                            <Text className={classes.title}>"SOS interior detox" nedir?</Text>
                        </Center>

                        <Center>
                            <Text className={classes.content}>
                                SOS interior detox iç mekanları arındırmanın en pratik, hızlı, zahmetsiz ve eğlenceli
                                biçimi!
                            </Text>
                        </Center>
                    </Container>

                    <Divider my={44} />

                    <Container size="xl">
                        <Center>
                            <Text className={classes.title}>"SOS interior detox" nasıl çalışır?</Text>
                        </Center>

                        <Center>
                            <Text className={classes.content}>
                                "SOS interior detox" ile iç mekanlar sadece birkaç günde arınıyor ve yenileniyor.
                                <br />
                                <br /> SOS interior ekibi detox sürecinde projenin en kısa sürede teslim edilmesini
                                hedefler. Mekanı ve mekan sahibini tanıdıktan hemen sonra 10-20 gün projelendirme ve
                                imalat süreci belirlenir. İlk görüşmede belirlenmiş olan tarihte, mekan sahibinin
                                belirlemiş olduğu bütçeye bağlı kalarak, sadece birkaç günlük çalışma ile iç mekan
                                tamamen arınmış, yepyeni bir görünüme ulaşır. Zahmetsizdir, mekan temizlenmiş ve
                                yaşamaya hazır şekilde teslim edilir.
                            </Text>
                        </Center>
                    </Container>

                    <Divider my={44} />

                    <Container size="xl">
                        <Center>
                            <Text className={classes.title}>"SOS interior detox" hangi mekanlarda uygulanır?</Text>
                        </Center>

                        <Center>
                            <Text className={classes.content}>
                                "SOS interior detox" bedenimizin ve zihnimizin olduğu kadar iç mekanlarında arınmaya
                                ihtiyacı olduğunu savunur.
                                <br />
                                <br />
                                Yaşlanmış, sıkıcı, enerjisi düşük olan iç mekanlarda uygulanır.
                            </Text>
                        </Center>
                    </Container>

                    <Divider my={44} />

                    <Container size="xl">
                        <Grid columns={3} align="center">
                            <Grid.Col className={classes.profileItem} span={1}>
                                <Box className={classes.profile}>
                                    <Image className={classes.image} alt="Serra Özbay" src="/images/portre.jpg" />
                                    <Text className={classes.name}>Serra Özbay</Text>
                                    <Text className={classes.userTitle}>Kurucu İçmimar</Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col className={`${classes.profileItem} ${classes.profileItemDescription}`} span={2}>
                                <Text className={classes.description}>
                                    Serra Özbay 1989, İzmir doğumlu. İzmir Ekonomi Üniversitesi İç mimarlık ve Çevre
                                    Tasarımı bölümünden mezun olduktan sonra Londra'da işletme eğitimi aldı. Hemen
                                    sonrasında İstanbul'a yerleşti. Restoran, Otel ve birçok konut projesinde görev
                                    aldı. Kariyerine 2016 yılında kurduğu markası "SOS interior" ile devam ediyor. Mekan
                                    ve insan psikolojisi arasındaki ilişkiyi konut projelerinde deneysel bir biçimde ele
                                    almayı seviyor. Habertürk gazetesi ve buseterim.com.tr' de yazıyor.{' '}
                                </Text>
                                <Link
                                    href="http://www.haberturk.com/yasam/haber/1300953-evlerde-sonbahar-detoksu"
                                    passHref
                                >
                                    <Anchor className={classes.links}>Habertürk Gazetesi</Anchor>
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

export default About
