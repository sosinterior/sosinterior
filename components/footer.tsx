import { Anchor, Box, Container, createStyles, Divider, Grid, Image, List, Text } from '@mantine/core'
import { BrandInstagram, Mail, MapPin } from 'tabler-icons-react'
import Link from 'next/link'

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
    description: {
        marginBottom: 12,
        fontWeight: 400,
        marginTop: 24,
        color: '#fff',
        fontSize: 14,
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
    const { classes } = useStyles()

    return (
        <footer>
            <Box className={classes.container}>
                <Container size="xl">
                    <Grid columns={3}>
                        <Grid.Col className={classes.gridItem} span={1}>
                            <Link href="/" passHref>
                                <Anchor sx={{ display: 'inline-block' }}>
                                    <Image alt="SOS Interior" className={classes.logo} src="/images/logo.png" />
                                </Anchor>
                            </Link>
                            <Text className={classes.description}>
                                We provides a full range of interior design, architectural design.
                            </Text>
                            <Link passHref href="#">
                                <Anchor>
                                    <BrandInstagram size={30} strokeWidth={1} color="#fff" />
                                </Anchor>
                            </Link>
                        </Grid.Col>

                        <Grid.Col className={classes.gridItem} span={1}>
                            <Text className={classes.title}>Contacts</Text>
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
                            </List>
                        </Grid.Col>

                        <Grid.Col className={classes.gridItem} span={1}>
                            <Text className={classes.title}>Latest Projects</Text>
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
