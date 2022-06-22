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
                <Text className={classes.title}>Neler Yaparız</Text>
            </Center>

            <Grid className={classes.items} columns={3}>
                <Grid.Col className={classes.item} span={1}>
                    <View360 size={50} strokeWidth={1} />
                    <Text className={classes.titles}>SOS Interior Detox</Text>
                    <Text className={classes.contents}>
                        SOS interior detox ile projelerin en kısa sürede teslim edilmesini hedefliyoruz. Mekânı ve mekân
                        sahibini tanıdıktan hemen sonra birkaç günlük çalışma ile iç mekânlar tamamen arınmış, yepyeni
                        bir görünüme ulaşıyor. İç mekânlar temizlenmiş ve yaşamaya hazır şekilde teslim ediliyor.
                    </Text>
                </Grid.Col>

                <Grid.Col className={classes.item} span={1}>
                    <Ruler size={50} strokeWidth={1} />
                    <Text className={classes.titles}>SOS Interior Projects</Text>
                    <Text className={classes.contents}>
                        İç mekânları arındırmak, rahatlatmak, mekân sahipleri ve iç mekân arasındaki ilişkiyi
                        kuvvetlendirmeyi hedefleyerek yola çıktığımız projelerde kullanıcıları iyi analiz ederek, beğeni
                        ve ihtiyaçlarını kendi çizgimizde yorumlamayı ve ince detaylara kafa yormayı çok seviyoruz.
                    </Text>
                </Grid.Col>

                <Grid.Col className={classes.item} span={1}>
                    <Home2 size={50} strokeWidth={1} />
                    <Text className={classes.titles}>SOS Interior Kids</Text>
                    <Text className={classes.contents}>
                        Konut projeleri ile başlayan tasarım yolculuğumuz çocuk odaları ile daha keyifli bir hâl alıyor.
                        Özgün ve bir o kadar eğlenceli iç mekanlarda yaratıcılığı ve eğlenceyi ön plana çıkarırken küçük
                        kullanıcılarımıza sınırsız ve özgür hissedebilecekleri yaşam alanları sunuyoruz.
                    </Text>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default HomeServices
