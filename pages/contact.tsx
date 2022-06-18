import { NextPage } from 'next'

import { Anchor, Box, Button, Container, createStyles, Input, List, Text, Textarea } from '@mantine/core'
import { BrandInstagram, Mail, MapPin } from 'tabler-icons-react'

import HeaderArea from '@/components/headerArea'
import Header from '@/components/header'
import Footer from '@/components/footer'
import colors from '@/theme/colors'
import Link from 'next/link'

const useStyles = createStyles(theme => ({
    container: {
        flexDirection: 'row',
        display: 'flex',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            flexDirection: 'column',
        },
    },
    itemLeft: {
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            flex: 1.7,
        },
    },
    itemLeftInner: {
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            paddingRight: 100,
        },
    },
    itemRight: {
        backgroundColor: colors.antrazit,
        position: 'relative',
        padding: '40px 20px',
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            top: '-20px',
            flex: 1,
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            marginTop: '20px',
        },
    },
    title: {
        color: colors.antrazit,
        fontWeight: 600,
        marginTop: 32,
        fontSize: 32,
    },
    description: {
        lineHeight: '28px',
        color: '#555555',
        marginBottom: 24,
        fontWeight: 400,
        marginTop: 12,
        fontSize: 15,
    },
    darkTitle: {
        color: colors.lightGray,
        fontWeight: 450,
        marginRight: 20,
        marginLeft: 20,
        fontSize: 32,
    },
    darkDescription: {
        color: colors.lightGray,
        letterSpacing: '1px',
        marginBottom: 24,
        fontWeight: 400,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 12,
        fontSize: 13,
    },
    list: {
        marginRight: 20,
        marginLeft: 20,
    },
    contactItem: {
        alignItems: 'center',
        display: 'flex',
        marginTop: 12,
        fontSize: 14,
        color: '#fff',
        span: {
            marginRight: 10,
        },
    },
}))

const Contact: NextPage = () => {
    // Hooks
    const { classes } = useStyles()

    return (
        <>
            <Header />
            <main>
                <HeaderArea
                    imageUrl="https://img.freepik.com/free-photo/living-room-interior-wall-warm-tones-gray-armchair-with-wood-cabinet-3d-rendering_41470-3656.jpg?w=2000"
                    title="İletişim"
                />
                <Container size="xl">
                    <Box className={classes.container}>
                        <Box className={classes.itemLeft}>
                            <Text className={classes.title}>İletişim</Text>
                            <Text className={classes.description}>
                                Your email address will not be published. Required fields are marked *
                            </Text>

                            <Box className={classes.itemLeftInner}>
                                <Input
                                    sx={{ marginTop: 12, color: colors.antrazit }}
                                    placeholder="Ad Soyad"
                                    radius="md"
                                />
                                <Input placeholder="Email" radius="md" sx={{ marginTop: 12, color: colors.antrazit }} />
                                <Textarea
                                    sx={{ marginTop: 12, color: colors.antrazit }}
                                    placeholder="Mesaj"
                                    radius="md"
                                />

                                <Button
                                    color="dark"
                                    radius="xl"
                                    size="md"
                                    sx={{ marginTop: 12, fontSize: 14, fontWeight: 400 }}
                                >
                                    Gönder
                                </Button>
                            </Box>
                        </Box>
                        <Box className={classes.itemRight}>
                            <Text className={classes.darkTitle}>Projeleriniz İçin</Text>
                            <Text className={classes.darkDescription}>
                                Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours
                                on business days. We will be happy to answer your questions.
                            </Text>

                            <List size="sm" listStyleType="none" className={classes.list}>
                                <List.Item>
                                    <Text className={classes.contactItem}>
                                        <Text component="span">
                                            <MapPin />
                                        </Text>
                                        <Text>
                                            <b>Adres</b>
                                            <br />
                                            Bebek, İstanbul
                                        </Text>
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text className={classes.contactItem}>
                                        <Text component="span">
                                            <Mail />
                                        </Text>
                                        <Text>
                                            <b>Email</b>
                                            <br />
                                            info@sosinterior.com
                                        </Text>
                                    </Text>
                                </List.Item>
                            </List>

                            <Link passHref href="#">
                                <Anchor sx={{ marginLeft: 20, marginTop: 20, display: 'inline-block' }}>
                                    <BrandInstagram size={30} strokeWidth={1} color="#fff" />
                                </Anchor>
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Contact
