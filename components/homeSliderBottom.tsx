import { Box, Container, createStyles, Image, Text } from '@mantine/core'

import colors from '@/theme/colors'

const useStyles = createStyles(theme => ({
    container: {
        backgroundColor: colors.antrazit,
        padding: '50px 0',
    },
    body: {
        alignItems: 'center',
        display: 'flex',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            flexDirection: 'column',
        },
    },
    title: {
        flex: 1,
        fontSize: 24,
        color: '#fff',
        fontWeight: 300,
        textAlign: 'right',
        marginRight: 28,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            textAlign: 'center',
            marginRight: 0,
            marginTop: 24,
            order: 1,
        },
    },
    content: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            order: 0,
        },
    },
    img: {
        height: 150,
        width: 150,
        img: {
            borderRadius: '75px',
            height: '150px !important',
            width: '150px !important',
        },
    },
}))

const HomeSliderBottom = () => {
    // Hooks
    const { classes } = useStyles()

    return (
        <Container fluid className={classes.container}>
            <Container size="xl">
                <Box className={classes.body}>
                    <Text className={classes.title}>
                        “Even if you don’t have a ready sketch of what you want – we will help you to get the result you
                        dreamed of.”
                    </Text>
                    <Box className={classes.content}>
                        <Image
                            alt="Serra Özbay"
                            className={classes.img}
                            src="http://www.sosinterior.com/images/portre.jpg"
                        />
                        <Box sx={{ marginLeft: 12 }}>
                            <Text sx={{ fontSize: 18, color: '#fff' }}>David Oswald</Text>
                            <Text sx={{ fontSize: 14, color: '#fff', fontWeight: 200 }}>FOUNDER OF COMPANY</Text>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Container>
    )
}

export default HomeSliderBottom
