import { FC } from 'react'

import { Container } from '@mantine/core'

import Item from './Item'

const AllNews: FC = () => {
    return (
        <Container size="xl" sx={{ marginTop: 100 }}>
            <Item
                images={['/images/news/marieclaire/4/1.jpeg', '/images/news/marieclaire/4/2.jpg']}
                title="MARIE CLAIRE MAISON"
                subTitle="Mayıs Sayı, 2022"
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
                subTitle="Ocak Sayı, 2022"
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
                title="IN STYLE HOME"
                subTitle="İlkbahar Sayı, 2021"
                itemIndex={11}
            />

            <Item
                images={[
                    '/images/news/marieclaire/3/1.jpg',
                    '/images/news/marieclaire/3/2.jpg',
                    '/images/news/marieclaire/3/3.jpg',
                ]}
                title="MARIE CLAIRE MAISON"
                subTitle="Nisan Sayı, 2021"
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
                subTitle="Mart Sayı, 2021"
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
                subTitle="Kasım Sayı, 2019"
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
                subTitle="Eylül Sayı, 2019"
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
                subTitle="300. Sayı, 2018"
                itemIndex={5}
            />

            <Item
                images={['/images/news/alldecor/3/1.jpg', '/images/news/alldecor/3/2.jpg']}
                title="ALL DECOR"
                subTitle="Yaz Sayısı, 2018"
                itemIndex={4}
            />

            <Item
                images={[
                    '/images/news/marieclaire/1/1.jpg',
                    '/images/news/marieclaire/1/2.jpg',
                    '/images/news/marieclaire/1/3.jpg',
                ]}
                title="MARIE CLAIRE MAISON"
                subTitle="Şubat Sayısı, 2018"
                itemIndex={3}
            />

            <Item
                images={[
                    '/images/news/alldecor/2/1.jpg',
                    '/images/news/alldecor/2/2.jpg',
                    '/images/news/alldecor/2/3.jpg',
                ]}
                title="ALL DECOR"
                subTitle="Yaz Özel Sayısı, 2017"
                itemIndex={2}
            />

            <Item
                images={[
                    '/images/news/alldecor/1/1.jpg',
                    '/images/news/alldecor/1/2.jpg',
                    '/images/news/alldecor/1/3.jpg',
                ]}
                title="ALL DECOR"
                subTitle="Mart-Nisan, 2017"
                itemIndex={1}
            />

            <Item
                images={['/images/news/haberturk/1/1.png']}
                title="HABERTÜRK GAZETESİ"
                subTitle="24.09.2016"
                itemIndex={0}
            />
        </Container>
    )
}

export default AllNews
