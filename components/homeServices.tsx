import { Center, Container, createStyles, Grid, Text } from '@mantine/core'
import { Home2, View360, Ruler } from 'tabler-icons-react'

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
    const { classes } = useStyles()

    return (
        <Container size="xl">
            <Center>
                <Text className={classes.title}>What Can We Offer</Text>
            </Center>

            <Grid className={classes.items} columns={3}>
                <Grid.Col className={classes.item} span={1}>
                    <View360 size={50} strokeWidth={1} />
                    <Text className={classes.titles}>SOSInteriod Kids</Text>
                    <Text className={classes.contents}>
                        We develop an attractive and convenient space for work and leisure time, working on units,
                        selecting materials, manufacturers.
                    </Text>
                </Grid.Col>

                <Grid.Col className={classes.item} span={1}>
                    <Ruler size={50} strokeWidth={1} />
                    <Text className={classes.titles}>SOSInteriod Detox</Text>
                    <Text className={classes.contents}>
                        We develop an attractive and convenient space for work and leisure time, working on units,
                        selecting materials, manufacturers.
                    </Text>
                </Grid.Col>

                <Grid.Col className={classes.item} span={1}>
                    <Home2 size={50} strokeWidth={1} />
                    <Text className={classes.titles}>SOSInterior Projects</Text>
                    <Text className={classes.contents}>
                        We develop an attractive and convenient space for work and leisure time, working on units,
                        selecting materials, manufacturers.
                    </Text>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default HomeServices
