import { FC } from 'react'

import { Container } from '@mantine/core'

import Item from './Item'

const AllProjects: FC = () => {
    return (
        <Container size="xl" sx={{ marginTop: 100 }}>
            <Item
                itemIndex={0}
                data={{
                    location: 'Atılgan Royal, İzmir',
                    name: 'Z.A Evi',
                    size: '180',
                    year: '2022',
                }}
                images={[
                    '/images/projects/1/1.jpg',
                    '/images/projects/1/2.jpg',
                    '/images/projects/1/3.jpg',
                    '/images/projects/1/4.jpg',
                    '/images/projects/1/5.jpg',
                    '/images/projects/1/6.jpg',
                    '/images/projects/1/7.jpg',
                    '/images/projects/1/8.jpg',
                    '/images/projects/1/9.jpg',
                    '/images/projects/1/10.jpg',
                    '/images/projects/1/11.jpg',
                ]}
            />

            <Item
                itemIndex={1}
                data={{
                    location: 'Emirgan, İstanbul',
                    name: 'B.F Evi',
                    size: '170',
                    year: '2022',
                }}
                images={[
                    '/images/projects/2/1.jpg',
                    '/images/projects/2/2.jpg',
                    '/images/projects/2/3.jpg',
                    '/images/projects/2/4.jpg',
                    '/images/projects/2/5.jpg',
                    '/images/projects/2/6.jpg',
                    '/images/projects/2/7.jpg',
                ]}
            />

            <Item
                itemIndex={2}
                data={{
                    location: 'Koşuyolu, İstanbul',
                    name: 'Ö.S Evi',
                    size: '180',
                    year: '2022',
                }}
                images={[
                    '/images/projects/3/1.jpg',
                    '/images/projects/3/2.jpg',
                    '/images/projects/3/3.jpg',
                    '/images/projects/3/4.jpg',
                    '/images/projects/3/5.jpg',
                    '/images/projects/3/6.jpg',
                    '/images/projects/3/7.jpg',
                    '/images/projects/3/8.jpg',
                ]}
            />
        </Container>
    )
}

export default AllProjects
