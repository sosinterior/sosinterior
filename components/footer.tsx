import { Anchor, Box, Container, createStyles, Divider, Grid, Image, List, Text } from '@mantine/core'
import { BrandInstagram, Mail, MapPin } from 'tabler-icons-react'
import Link from 'next/link'

import { useTranslation } from 'next-i18next'
import colors from '@/theme/colors'

const useStyles = createStyles(theme => ({
    container: {
        backgroundColor: colors.antrazit,
        paddingTop: 100,
        marginTop: 90,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingTop: 40,
        },
    },
    logo: {
        filter: 'brightness(0) invert(1)',
        width: 60,
    },
    title: {
        fontWeight: 600,
        color: '#fff',
        fontSize: 18,
    },
    gridItem: {
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexBasis: '100%',
            maxWidth: '100%',
            marginTop: 40,
        },
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
    bottom: {
        paddingBottom: '20px',
        paddingTop: '10px',
    },
    copy: {
        letterSpacing: '1px',
        fontWeight: 300,
        color: '#fff',
        fontSize: 14,
        a: {
            fontWeight: 500,
            color: '#fff',
            fontSize: 14,
        },
    },
}))

const Footer = () => {
    // Hooks
    const { t } = useTranslation('common')
    const { classes } = useStyles()

    return (
        <footer>
            <Box className={classes.container}>
                <Container size="xl">
                    <Grid columns={3}>
                        <Grid.Col className={classes.gridItem} span={1}>
                            <Link href="/" passHref>
                                <Anchor sx={{ display: 'inline-block' }}>
                                    <Image
                                        className={classes.logo}
                                        src="/images/logo.png"
                                        alt="SOS Interior"
                                        width="60px"
                                    />
                                </Anchor>
                            </Link>
                        </Grid.Col>

                        <Grid.Col className={classes.gridItem} span={1}>
                            <Text className={classes.title}>{t('contact')}</Text>
                            <List size="sm" listStyleType="none">
                                <List.Item>
                                    <Text className={classes.contactItem}>
                                        <Text component="span">
                                            <MapPin />
                                        </Text>
                                        Bebek, İstanbul
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text className={classes.contactItem}>
                                        <Text component="span">
                                            <Mail />
                                        </Text>
                                        info@sosinterior.com
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Link passHref href="https://www.instagram.com/sosinterior">
                                        <Anchor
                                            target="_blank"
                                            sx={{
                                                textDecoration: 'none !important',
                                                alignItems: 'center',
                                                display: 'flex',
                                                marginTop: 20,
                                                color: '#fff',
                                            }}
                                        >
                                            <BrandInstagram />
                                            <Text sx={{ marginLeft: 5 }}>sosinterior</Text>
                                        </Anchor>
                                    </Link>
                                </List.Item>
                            </List>
                        </Grid.Col>

                        <Grid.Col className={classes.gridItem} span={1}>
                            <Text className={classes.title}>{t('latestProjects')}</Text>
                            <List size="sm" listStyleType="none">
                                <List.Item>
                                    <Link passHref href="/">
                                        <Anchor className={classes.contactItem}>Z.A Evi - Atılgan Royal, İzmir</Anchor>
                                    </Link>
                                </List.Item>
                                <List.Item>
                                    <Link passHref href="/">
                                        <Anchor className={classes.contactItem}>B.F Evi - Emirgan, İstanbul</Anchor>
                                    </Link>
                                </List.Item>
                                <List.Item>
                                    <Link passHref href="/">
                                        <Anchor className={classes.contactItem}>Ö.S Evi - Koşuyolu, İstanbul</Anchor>
                                    </Link>
                                </List.Item>
                            </List>
                        </Grid.Col>
                    </Grid>
                </Container>
                {/* <hr /> */}
                <Divider size="xs" my={10} color="rgba(255,255,255,.2)" />
                <Container className={classes.bottom} size="xl">
                    <Text className={classes.copy}>
                        Copyright © 2022 <Anchor>Webridge</Anchor>. All Rights Reserved.
                    </Text>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer
