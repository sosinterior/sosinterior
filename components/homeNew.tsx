import colors from '@/theme/colors'
import { Box, Container, Image, createStyles, Text, Button } from '@mantine/core'

const useStyles = createStyles(theme => ({
    container: {
        alignItems: 'center',
        padding: '100px',
        display: 'flex',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            padding: '50px 0',
            flexDirection: 'column',
        },
    },
    item: {
        flex: 1,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            padding: '0 32px',
        },
    },
    imageItem: {
        justifyContent: 'flex-end',
        marginRight: 24,
        display: 'flex',
    },
    image: {
        maxWidth: '100%',
        height: 400,
        width: 400,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            height: 300,
            width: 300,
        },
        img: {
            height: '400px !important',
            width: '400px !important',
            borderRadius: '200px',
            margin: '0 auto',
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                height: '300px !important',
                width: '300px !important',
                maxWidth: '100%',
            },
        },
    },
    title: {
        color: colors.antrazit,
        fontWeight: 600,
        fontSize: 32,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            marginTop: 24,
        },
    },
    content: {
        lineHeight: '28px',
        color: '#555555',
        marginBottom: 24,
        fontWeight: 400,
        marginTop: 12,
        fontSize: 15,
    },
}))

const HomeNew = () => {
    // Hooks
    const { classes } = useStyles()

    return (
        <Container size="xl" className={classes.container}>
            <Box className={`${classes.item} ${classes.imageItem}`}>
                <Image
                    src="http://www.sosinterior.com/demos/blog/instyle/4.jpg"
                    className={classes.image}
                    alt="Haberler"
                />
            </Box>
            <Box className={classes.item}>
                <Text className={classes.title}>From Sketch to Life</Text>
                <Text className={classes.content}>
                    The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our
                    customers by lightning-fast development of projects employing unique styles and architecture. Even
                    if you don’t have a ready sketch of what you want – we will help you to get the result you dreamed
                    of.
                </Text>
                <Button color="dark" radius="xl" size="lg" sx={{ fontSize: 14, fontWeight: 400 }}>
                    View Projects
                </Button>
            </Box>
        </Container>
    )
}

export default HomeNew
