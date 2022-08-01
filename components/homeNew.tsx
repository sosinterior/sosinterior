import colors from '@/theme/colors'
import { useTranslation } from 'next-i18next'
import { Box, Container, Image, createStyles, Button } from '@mantine/core'

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
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginRight: 0,
            marginBottom: 24,
        },
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
    const { t } = useTranslation('home')
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
                {/* <Text className={classes.title}>Haberler</Text> */}
                <Button
                    component="a"
                    href="/news"
                    color="dark"
                    radius="xl"
                    size="lg"
                    sx={{ fontSize: 14, fontWeight: 400 }}
                >
                    {t('viewNews')}
                </Button>
            </Box>
        </Container>
    )
}

export default HomeNew
