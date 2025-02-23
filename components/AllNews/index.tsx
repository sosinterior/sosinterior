import { FC } from 'react'

import { useTranslation } from 'next-i18next'
import { Container } from '@mantine/core'

import Item from './Item'

const AllNews: FC = () => {
    // Hooks
    const { t } = useTranslation(['news'])

    return (
        <Container size="xl" sx={{ marginTop: 100 }}>
            <Item
                images={[
                    '/images/news/instylehome/3/1.jpg',
                    '/images/news/instylehome/3/2.jpg',
                    '/images/news/instylehome/3/3.jpg',
                    '/images/news/instylehome/3/4.jpg',
                ]}
                title="INSTYLE HOME"
                subTitle={`${t('winter')}, 2025`}
                itemIndex={19}
            />
            <Item
                images={[
                    '/images/news/mekan/4/1.jpg',
                    '/images/news/mekan/4/2.jpg',
                    '/images/news/mekan/4/3.jpg',
                    '/images/news/mekan/4/4.jpg',
                    '/images/news/mekan/4/5.jpg',
                    '/images/news/mekan/4/6.jpg',
                    '/images/news/mekan/4/7.jpg',
                ]}
                title="MEKAN"
                subTitle={`${t('october')} ${t('issue')}, 2024`}
                itemIndex={18}
            />
            <Item
                images={[
                    '/images/news/maison/2/kapak.jpg',
                    '/images/news/maison/2/1.jpg',
                    '/images/news/maison/2/2.jpg',
                    '/images/news/maison/2/3.jpg',
                    '/images/news/maison/2/4.jpg',
                    '/images/news/maison/2/5.jpg',
                    '/images/news/maison/2/6.jpg',
                ]}
                title="MAISON FRANÇAISE"
                subTitle={`${t('october')} ${t('issue')}, 2024`}
                itemIndex={17}
            />
            <Item
                images={['/images/news/maison/1/1.jpg', '/images/news/maison/1/2.jpg']}
                title="MAISON FRANÇAISE X VİVENSE"
                subTitle={`${t('september')} ${t('issue')}, 2023`}
                itemIndex={16}
            />

            <Item
                images={[
                    '/images/news/marieclaire/5/1.jpg',
                    '/images/news/marieclaire/5/2.jpg',
                    '/images/news/marieclaire/5/3.jpg',
                    '/images/news/marieclaire/5/4.jpg',
                    '/images/news/marieclaire/5/5.jpg',
                    '/images/news/marieclaire/5/6.jpg',
                ]}
                title="MARIE CLAIRE MAISON"
                subTitle={`${t('september')} ${t('issue')}, 2022`}
                itemIndex={15}
            />

            <Item
                images={[
                    '/images/news/instylehome/2/1.jpg',
                    '/images/news/instylehome/2/2.jpg',
                    '/images/news/instylehome/2/3.jpg',
                    '/images/news/instylehome/2/4.jpg',
                ]}
                title="INSTYLE HOME"
                subTitle={`${t('summer')}, 2022`}
                itemIndex={14}
            />

            <Item
                images={['/images/news/marieclaire/4/1.jpeg', '/images/news/marieclaire/4/2.jpg']}
                title="MARIE CLAIRE MAISON"
                subTitle={`${t('may')} ${t('issue')}, 2022`}
                itemIndex={13}
            />

            <Item
                images={[
                    '/images/news/mekan/3/1.jpg',
                    '/images/news/mekan/3/2.jpg',
                    '/images/news/mekan/3/3.jpg',
                    '/images/news/mekan/3/4.jpg',
                    '/images/news/mekan/3/5.jpg',
                    '/images/news/mekan/3/6.jpg',
                    '/images/news/mekan/3/7.jpg',
                ]}
                title="MEKAN"
                subTitle={`${t('january')} ${t('issue')}, 2022`}
                itemIndex={12}
            />

            <Item
                images={[
                    '/images/news/instylehome/1/1.jpeg',
                    '/images/news/instylehome/1/2.jpg',
                    '/images/news/instylehome/1/3.jpg',
                    '/images/news/instylehome/1/4.jpg',
                    '/images/news/instylehome/1/5.jpg',
                    '/images/news/instylehome/1/6.jpg',
                ]}
                title="INSTYLE HOME"
                subTitle={`${t('spring')} ${t('issue')}, 2021`}
                itemIndex={11}
            />

            <Item
                images={[
                    '/images/news/marieclaire/3/1.jpg',
                    '/images/news/marieclaire/3/2.jpg',
                    '/images/news/marieclaire/3/3.jpg',
                ]}
                title="MARIE CLAIRE MAISON"
                subTitle={`${t('april')} ${t('issue')}, 2021`}
                itemIndex={10}
            />

            <Item
                images={[
                    '/images/news/mekan/2/1.jpg',
                    '/images/news/mekan/2/2.jpg',
                    '/images/news/mekan/2/3.jpg',
                    '/images/news/mekan/2/4.jpg',
                    '/images/news/mekan/2/5.jpg',
                ]}
                title="MEKAN"
                subTitle={`${t('march')} ${t('issue')}, 2021`}
                itemIndex={8}
            />

            <Item
                images={[
                    '/images/news/mekan/1/1.jpg',
                    '/images/news/mekan/1/2.jpg',
                    '/images/news/mekan/1/3.jpg',
                    '/images/news/mekan/1/4.jpg',
                ]}
                title="MEKAN"
                subTitle={`${t('november')} ${t('issue')}, 2019`}
                itemIndex={7}
            />

            <Item
                images={[
                    '/images/news/marieclaire/2/1.jpg',
                    '/images/news/marieclaire/2/2.jpg',
                    '/images/news/marieclaire/2/3.jpg',
                    '/images/news/marieclaire/2/4.jpg',
                    '/images/news/marieclaire/2/5.jpg',
                ]}
                title="MARIE CLAIRE MAISON"
                subTitle={`${t('september')} ${t('issue')}, 2019`}
                itemIndex={6}
            />

            <Item
                images={[
                    '/images/news/homeart/1/1.jpg',
                    '/images/news/homeart/1/2.jpg',
                    '/images/news/homeart/1/3.jpg',
                    '/images/news/homeart/1/4.jpg',
                ]}
                title="HOME ART"
                subTitle={`300. ${t('issue')}, 2018`}
                itemIndex={5}
            />

            <Item
                images={['/images/news/alldecor/3/1.jpg', '/images/news/alldecor/3/2.jpg']}
                title="ALL DECOR"
                subTitle={`${t('summer')} ${t('issue')}, 2018`}
                itemIndex={4}
            />

            <Item
                images={[
                    '/images/news/marieclaire/1/1.jpg',
                    '/images/news/marieclaire/1/2.jpg',
                    '/images/news/marieclaire/1/3.jpg',
                ]}
                title="MARIE CLAIRE MAISON"
                subTitle={`${t('february')} ${t('issue')}, 2018`}
                itemIndex={3}
            />

            <Item
                images={[
                    '/images/news/alldecor/2/1.jpg',
                    '/images/news/alldecor/2/2.jpg',
                    '/images/news/alldecor/2/3.jpg',
                ]}
                title="ALL DECOR"
                subTitle={`${t('summer')} ${t('special')} ${t('issue')}, 2017`}
                itemIndex={2}
            />

            <Item
                images={[
                    '/images/news/alldecor/1/1.jpg',
                    '/images/news/alldecor/1/2.jpg',
                    '/images/news/alldecor/1/3.jpg',
                ]}
                title="ALL DECOR"
                subTitle={`${t('march')}-${t('april')}, 2017`}
                itemIndex={1}
            />

            <Item
                images={['/images/news/haberturk/1/1.png']}
                title={`Habertürk ${t('newspaper')}`}
                subTitle="24.09.2016"
                itemIndex={0}
            />
        </Container>
    )
}

export default AllNews
