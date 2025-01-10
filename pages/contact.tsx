import { SetStateAction, useCallback, useState } from 'react'
import { NextPage } from 'next'

import {
    Alert,
    Anchor,
    Box,
    Button,
    Container,
    createStyles,
    Input,
    List,
    LoadingOverlay,
    Text,
    Textarea,
} from '@mantine/core'
import { AlertCircle, BrandInstagram, Mail, MapPin, Phone } from 'tabler-icons-react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

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
        position: 'relative',
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
    const [systemMessage, setSystemMessage] = useState('')
    const [systemTitle, setSystemTitle] = useState('')
    const [systemColor, setSystemColor] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    // Hooks
    const { t } = useTranslation(['contact', 'common'])
    const { executeRecaptcha } = useGoogleReCaptcha()
    const { classes } = useStyles()

    const resetStates = (isError: boolean) => {
        setLoading(false)
        if (!isError) {
            setMessage('')
            setEmail('')
            setName('')
        }
        setSystemMessage(
            isError
                ? 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyiniz.'
                : 'Mesajınız başarıyla gönderilmiştir.',
        )
        setSystemTitle(isError ? 'İşlem Başarısız!' : 'İşlem Başarılı!')
        setSystemColor(isError ? 'red' : 'green')

        setTimeout(() => {
            setSystemMessage('')
            setSystemTitle('')
            setSystemColor('')
        }, 3500)
    }

    const onSubmit = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available')
            return
        }

        executeRecaptcha('enquiryFormSubmit').then(gReCaptchaToken => {
            const data = { message, email, name, gReCaptchaToken }
            submitEnquiryForm(data)
        })
    }, [executeRecaptcha, name, email, message])

    const submitEnquiryForm = (data: { message: string; email: string; name: string; gReCaptchaToken: string }) => {
        setSystemMessage('')
        setSystemTitle('')
        setSystemColor('')
        setLoading(true)

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => {
                if (res.status) {
                    resetStates(false)
                } else {
                    resetStates(true)
                }
            })
            .catch(err => {
                resetStates(true)
                console.log(err)
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
                                {(systemMessage || systemTitle) && (
                                    <Alert
                                        icon={<AlertCircle size={16} />}
                                        title={systemTitle}
                                        color={systemColor}
                                        withCloseButton
                                        mt={10}
                                    >
                                        {systemMessage}
                                    </Alert>
                                )}

                                <LoadingOverlay visible={loading} />
                                <Input
                                    sx={{ marginTop: 12, color: colors.antrazit }}
                                    onChange={(e: { target: { value: SetStateAction<string> } }) =>
                                        setName(e.target.value)
                                    }
                                    value={name}
                                    placeholder={t('name')}
                                    radius="md"
                                />
                                <Input
                                    onChange={(e: { target: { value: SetStateAction<string> } }) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="Email"
                                    value={email}
                                    radius="md"
                                    sx={{ marginTop: 12, color: colors.antrazit }}
                                />
                                <Textarea
                                    sx={{ marginTop: 12, color: colors.antrazit }}
                                    onChange={e => setMessage(e.target.value)}
                                    placeholder={t('message')}
                                    value={message}
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
                                <List.Item>
                                    <Link passHref href="https://www.instagram.com/sosinterior">
                                        <Anchor className={classes.contactItem} target="_blank">
                                            <BrandInstagram size={30} strokeWidth={2} color="#fff" />
                                            <Text sx={{ marginLeft: 5 }}>sosinterior</Text>
                                        </Anchor>
                                    </Link>
                                </List.Item>
                                <List.Item>
                                    <Link passHref href="tel:02128070167">
                                        <Anchor className={classes.contactItem} target="_blank">
                                            <Phone size={30} strokeWidth={2} color="#fff" />
                                            <Text sx={{ marginLeft: 5 }}>0212 807 01 67</Text>
                                        </Anchor>
                                    </Link>
                                </List.Item>
                            </List>

                            {/* <Link passHref href="https://www.instagram.com/sosinterior">
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
                            </Link> */}
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
