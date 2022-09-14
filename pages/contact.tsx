import { NextPage } from 'next'

import { Anchor, Box, Button, Container, createStyles, Input, List, Text, Textarea } from '@mantine/core'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { BrandInstagram, Mail, MapPin } from 'tabler-icons-react'

import HeaderArea from '@/components/headerArea'
import Header from '@/components/header'
import Footer from '@/components/footer'
import colors from '@/theme/colors'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

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
    const { t } = useTranslation(['contact', 'common'])
    const { classes } = useStyles()

    const onSubmit = () => {
        let data = {
            name: 'Mert',
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => {
            console.log('Response received')
            console.log(res)
            if (res.status === 200) {
                console.log('Response succeeded!')
            }
        })
    }

    return (
        <>
            <Header />
            <main>
                <HeaderArea
                    backgroundPosition="center bottom -340px"
                    imageUrl="/images/headers/contact.jpg"
                    title={t('contact', { ns: 'common' })}
                />
                <Container size="xl">
                    <Box className={classes.container}>
                        <Box className={classes.itemLeft}>
                            <Text className={classes.title}>{t('contact', { ns: 'common' })}</Text>

                            <Box className={classes.itemLeftInner}>
                                <Input
                                    sx={{ marginTop: 12, color: colors.antrazit }}
                                    placeholder={t('name')}
                                    radius="md"
                                />
                                <Input placeholder="Email" radius="md" sx={{ marginTop: 12, color: colors.antrazit }} />
                                <Textarea
                                    sx={{ marginTop: 12, color: colors.antrazit }}
                                    placeholder={t('message')}
                                    radius="md"
                                />

                                <Button
                                    onClick={onSubmit}
                                    color="dark"
                                    radius="xl"
                                    size="md"
                                    sx={{ marginTop: 12, fontSize: 14, fontWeight: 400 }}
                                >
                                    {t('submit')}
                                </Button>
                            </Box>
                        </Box>
                        <Box className={classes.itemRight}>
                            <List size="sm" listStyleType="none" className={classes.list}>
                                <List.Item>
                                    <Text className={classes.contactItem}>
                                        <Text component="span">
                                            <MapPin />
                                        </Text>
                                        <Text>
                                            <b>{t('address')}</b>
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
                                            <b>{t('email')}</b>
                                            <br />
                                            info@sosinterior.com
                                        </Text>
                                    </Text>
                                </List.Item>
                            </List>

                            <Link passHref href="https://www.instagram.com/sosinterior">
                                <Anchor
                                    target="_blank"
                                    sx={{
                                        textDecoration: 'none !important',
                                        alignItems: 'center',
                                        display: 'flex',
                                        marginLeft: 20,
                                        marginTop: 20,
                                        color: '#fff',
                                    }}
                                >
                                    <BrandInstagram size={30} strokeWidth={2} color="#fff" />
                                    <Text sx={{ marginLeft: 5 }}>sosinterior</Text>
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

export const getServerSideProps = async ({ locale, req }: { locale: string; req: Request }) => {
    if (req.url.includes('.html')) {
        return {
            redirect: {
                destination: '/contact',
                statusCode: 301,
            },
        }
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, ['contact', 'common'])),
        },
    }
}

export default Contact
