import { FC, useCallback, useEffect, useState } from 'react'

import { Anchor, Burger, Container, createStyles, Group, Image } from '@mantine/core'
import { useRouter } from 'next/router'
import colors from '@/theme/colors'
import Link from 'next/link'

const useStyles = createStyles(theme => ({
    container: {
        borderBottom: `1px solid ${colors.lightGray}`,
        transition: 'all .5s',
        position: 'fixed',
        height: 90,
        zIndex: 99,
        right: 0,
        left: 0,
        top: 0,
        '&.dark': {
            borderBottomColor: colors.antrazit,
            backgroundColor: colors.antrazit,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            padding: 0,
        },
        '&.noBorder': {
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                border: 'none !important',
            },
        },
    },
    link: {
        textDecoration: 'none !important',
        position: 'relative',
        letterSpacing: '2px',
        alignItems: 'center',
        fontWeight: 400,
        display: 'flex',
        color: '#fff',
        fontSize: 15,
        height: 90,
        '&:last-child': {
            '&::after': {
                display: 'none',
            },
        },
        '&::after': {
            backgroundColor: '#fff',
            position: 'relative',
            display: 'block',
            content: "''",
            right: '-5px',
            height: 25,
            width: 1,
        },
        '&:before': {
            transition: 'all .5s',
            position: 'absolute',
            display: 'block',
            marginLeft: -7,
            content: "''",
            left: '50%',
            bottom: 0,
            height: 0,
            width: 0,
        },
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            '&:before': {
                borderBottom: `0 solid ${colors.lightGray}`,
                borderRight: '7px solid transparent',
                borderLeft: '7px solid transparent',
            },
            '&:hover': {
                '&:before': {
                    borderBottom: `7px solid ${colors.lightGray}`,
                },
            },
            '&.active': {
                '&:before': {
                    borderBottom: `7px solid ${colors.lightGray}`,
                },
            },
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            '&::after': {
                display: 'none',
            },
            '&:before': {
                borderLeft: `0 solid ${colors.lightGray}`,
                borderBottom: '7px solid transparent',
                borderTop: '7px solid transparent',
                marginBottom: '-7px',
                bottom: '50%',
                left: -7,
            },
            '&:hover': {
                '&:before': {
                    borderLeft: `7px solid ${colors.lightGray}`,
                },
            },
            '&.active': {
                '&:before': {
                    borderLeft: `7px solid ${colors.lightGray}`,
                },
            },
        },
    },
    links: {
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            backgroundColor: colors.antrazit,
            flexDirection: 'column',
            transition: 'all .4s',
            position: 'absolute',
            display: 'flex',
            height: '100vh',
            width: '100%',
            left: '-100%',
            opacity: 1,
            '&.active': {
                left: 0,
            },
            '&:before': {
                backgroundColor: '#fff',
                position: 'absolute',
                display: 'block',
                content: "''",
                width: '100%',
                height: 1,
                top: 90,
            },
        },
    },
    hamburger: {
        transform: 'translateY(-50%)',
        position: 'absolute',
        right: 24,
        top: '50%',
        zIndex: 2,
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            display: 'none',
        },
    },
    logoWrapper: {
        backgroundColor: '#fff',
        position: 'absolute',
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 15,
        bottom: 0,
        left: 0,
        top: 0,
    },
    logo: {
        width: 50,
    },
}))

const Header: FC<{ isBorder?: boolean }> = ({ isBorder = false }) => {
    const [isOpened, setIsOpened] = useState(false)
    const [isDarkBg, setIsDarkBg] = useState(false)
    // Hooks
    const { classes } = useStyles()
    const router = useRouter()

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onScroll = useCallback(() => {
        if (window.scrollY > 90) {
            setIsDarkBg(true)
        } else if (window.scrollY === 0) {
            setIsDarkBg(false)
        }
    }, [])

    return (
        <header>
            <Container
                fluid
                className={
                    isDarkBg
                        ? `${classes.container} ${isBorder ? 'dark' : 'dark noBorder'}`
                        : `${isBorder ? classes.container : classes.container + ' noBorder'}`
                }
            >
                <Burger
                    onClick={() => setIsOpened(o => !o)}
                    className={classes.hamburger}
                    title="Navigation"
                    opened={isOpened}
                    color="#fff"
                    size="md"
                />
                <Link href="/" passHref>
                    <Anchor className={classes.logoWrapper}>
                        <Image alt="SOS Interior" width="50px" className={classes.logo} src="/images/logo.png" />
                    </Anchor>
                </Link>
                <Group className={isOpened ? `${classes.links} active` : classes.links} position="center">
                    <Anchor className={router.asPath === '/' ? `${classes.link} active` : classes.link} href="/">
                        Anasayfa
                    </Anchor>
                    <Anchor
                        className={router.asPath === '/about' ? `${classes.link} active` : classes.link}
                        href="/about"
                    >
                        Hakkımızda
                    </Anchor>
                    <Anchor
                        className={router.asPath === '/projects' ? `${classes.link} active` : classes.link}
                        href="/projects"
                    >
                        Projeler
                    </Anchor>
                    <Anchor
                        className={router.asPath === '/news' ? `${classes.link} active` : classes.link}
                        href="/news"
                    >
                        Haberler
                    </Anchor>
                    <Anchor
                        className={router.asPath === '/contact' ? `${classes.link} active` : classes.link}
                        href="/contact"
                    >
                        İletişim
                    </Anchor>
                </Group>
            </Container>
        </header>
    )
}

export default Header
