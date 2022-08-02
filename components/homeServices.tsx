import { /* Center, */ Container, createStyles, Grid, Image, Text } from '@mantine/core'

import { useTranslation } from 'next-i18next'
import colors from '@/theme/colors'

const useStyles = createStyles(theme => ({
    title: {
        color: colors.antrazit,
        fontWeight: 600,
        marginTop: 48,
        fontSize: 32,
    },
    items: {
        marginTop: 32,
    },
    item: {
        marginTop: 16,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexBasis: '100%',
            maxWidth: '100%',
        },
    },
    titles: {
        color: colors.antrazit,
        fontWeight: 600,
        fontSize: 24,
    },
    contents: {
        color: colors.antrazit,
        lineHeight: '28px',
        fontWeight: 400,
        fontSize: 15,
    },
}))

const HomeServices = () => {
    // Hooks
    const { t } = useTranslation('home')
    const { classes } = useStyles()

    return (
        <Container size="xl">
            {/* <Center>
                <Text className={classes.title}>{t('whatWeDo')}</Text>
            </Center> */}

            <Grid className={classes.items} columns={3}>
                <Grid.Col className={classes.item} span={1}>
                    <Image width={60} src="/images/services-icon.jpg" />
                    <Text className={classes.titles}>{t('service1Title')}</Text>
                    <Text className={classes.contents}>{t('service1Desc')}</Text>
                </Grid.Col>

                <Grid.Col className={classes.item} span={1}>
                    <Image width={60} src="/images/services-icon.jpg" />
                    <Text className={classes.titles}>{t('service2Title')}</Text>
                    <Text className={classes.contents}>{t('service2Desc')}</Text>
                </Grid.Col>

                <Grid.Col className={classes.item} span={1}>
                    <Image width={60} src="/images/services-icon.jpg" />
                    <Text className={classes.titles}>{t('service3Title')}</Text>
                    <Text className={classes.contents}>{t('service3Desc')}</Text>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default HomeServices
