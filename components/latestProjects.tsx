import colors from '@/theme/colors'
import { Anchor, Container, createStyles, Image, Text } from '@mantine/core'

const useStyles = createStyles(theme => ({
    container: {
        display: 'flex',
        padding: 0,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column',
        },
    },
    item: {
        textDecoration: 'none !important',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        justifyContent: 'flex-end',
        backgroundSize: 'cover',
        flexDirection: 'column',
        transition: 'all .3s',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: 20,
        paddingLeft: 50,
        display: 'flex',
        height: 360,
        flex: 1,
        '&:before': {
            background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)',
            transition: 'all .3s',
            position: 'absolute',
            display: 'block',
            content: "''",
            bottom: 0,
            right: 0,
            left: 0,
            top: 0,
        },
        '&:hover': {
            paddingBottom: 40,
            img: {
                scale: '1.06',
            },
            '&:before': {
                opacity: 0.5,
            },
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            height: 260,
        },
    },
    title: {
        letterSpacing: '1px',
        position: 'relative',
        fontWeight: 600,
        color: '#fff',
        fontSize: 24,
    },
    location: {
        position: 'relative',
        letterSpacing: '1px',
        fontWeight: 400,
        color: '#fff',
        fontSize: 16,
    },
    image: {
        height: '100% !important',
        width: '100% !important',
        position: 'absolute',
        zIndex: -1,
        left: 0,
        top: 0,
        figure: {
            height: '100%',
            div: {
                height: '100%',
                img: {
                    height: '100% !important',
                    transition: 'all .7s',
                },
            },
        },
    },
    more: {
        backgroundColor: colors.antrazit,
        textDecoration: 'none !important',
        letterSpacing: '2px',
        textAlign: 'center',
        padding: '12px 0',
        display: 'block',
        fontWeight: 500,
        color: '#fff',
        width: '100%',
    },
}))

const LatestProjects = () => {
    // Hooks
    const { classes } = useStyles()

    return (
        <>
            <Container fluid className={classes.container}>
                <Anchor className={classes.item} href="#">
                    <Image className={classes.image} src="/images/projects/1/1.jpg" alt="Z.A Evi" />
                    <Text className={classes.title}>Z.A Evi</Text>
                    <Text className={classes.location}>Atılgan Royal, İzmir</Text>
                </Anchor>
                <Anchor className={classes.item} href="#">
                    <Image className={classes.image} src="/images/projects/2/1.jpg" alt="B.F Evi" />
                    <Text className={classes.title}>B.F Evi</Text>
                    <Text className={classes.location}>Emirgan, İstanbul</Text>
                </Anchor>
                <Anchor className={classes.item} href="#">
                    <Image className={classes.image} src="/images/projects/3/1.jpg" alt="Ö.S Evi" />
                    <Text className={classes.title}>Ö.S Evi</Text>
                    <Text className={classes.location}>Koşuyolu, İstanbul</Text>
                </Anchor>
            </Container>
            <Anchor className={classes.more} href="/projects">
                TÜMÜNÜ GÖR
            </Anchor>
        </>
    )
}

export default LatestProjects
