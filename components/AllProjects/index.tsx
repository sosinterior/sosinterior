import { FC } from 'react'

import { Container } from '@mantine/core'

import Item from './Item'
import { useTranslation } from 'next-i18next'

const AllProjects: FC = () => {
    // Hooks
    const { t } = useTranslation(['projects', 'common'])

    return (
        <Container size="xl" sx={{ marginTop: 100 }}>
            <Item
                itemIndex={30}
                data={{
                    location: 'Dalyan, Muğla',
                    name: `Ç.E ${t('house', { ns: 'common' })}`,
                    size: '320',
                    year: '2022',
                }}
                images={[
                    '/images/projects/31/1.jpg',
                    '/images/projects/31/2.jpg',
                    '/images/projects/31/3.jpg',
                    '/images/projects/31/4.jpg',
                    '/images/projects/31/5.jpg',
                    '/images/projects/31/6.jpg',
                    '/images/projects/31/7.jpg',
                    '/images/projects/31/8.jpg',
                    '/images/projects/31/9.jpg',
                    '/images/projects/31/10.jpg',
                    '/images/projects/31/12.jpg',
                    '/images/projects/31/13.jpg',
                    '/images/projects/31/14.jpg',
                    '/images/projects/31/15.jpg',
                    '/images/projects/31/16.jpg',
                    '/images/projects/31/17.jpg',
                    '/images/projects/31/18.jpg',
                    '/images/projects/31/19.jpg',
                    '/images/projects/31/20.jpg',
                    '/images/projects/31/21.jpg',
                    '/images/projects/31/22.jpg',
                    '/images/projects/31/23.jpg',
                    '/images/projects/31/24.jpg',
                    '/images/projects/31/25.jpg',
                    '/images/projects/31/26.jpg',
                    '/images/projects/31/27.jpg',
                    '/images/projects/31/28.jpg',
                    '/images/projects/31/29.jpg',
                    '/images/projects/31/30.jpg',
                    '/images/projects/31/31.jpg',
                ]}
            />

            <Item
                itemIndex={0}
                data={{
                    location: 'Atılgan Royal, İzmir',
                    name: `Z.A ${t('house', { ns: 'common' })}`,
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
                    name: `B.F ${t('house', { ns: 'common' })}`,
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
                    name: `Ö.S ${t('house', { ns: 'common' })}`,
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

            <Item
                itemIndex={3}
                data={{
                    location: 'Moda, İstanbul',
                    name: `A.K ${t('house', { ns: 'common' })}`,
                    size: '18',
                    year: '2021',
                }}
                images={[
                    '/images/projects/4/1.jpg',
                    '/images/projects/4/2.jpg',
                    '/images/projects/4/3.jpg',
                    '/images/projects/4/4.jpg',
                    '/images/projects/4/5.jpg',
                    '/images/projects/4/6.jpg',
                ]}
            />

            <Item
                itemIndex={4}
                data={{
                    location: 'Nişantaşı, İstanbul',
                    name: `Dr. UH ${t('clinic')}`,
                    size: '235',
                    year: '2021',
                }}
                images={[
                    '/images/projects/5/1.jpg',
                    '/images/projects/5/2.jpg',
                    '/images/projects/5/3.jpg',
                    '/images/projects/5/4.jpg',
                    '/images/projects/5/5.jpg',
                    '/images/projects/5/6.jpg',
                    '/images/projects/5/7.jpg',
                    '/images/projects/5/8.jpg',
                    '/images/projects/5/9.jpg',
                    '/images/projects/5/10.jpg',
                ]}
            />

            <Item
                itemIndex={5}
                data={{
                    location: 'Zekeriyaköy, İstanbul',
                    name: `Ö.D ${t('house', { ns: 'common' })}, SOSinterior X Gigi Kids`,
                    size: '34',
                    year: '2021',
                }}
                images={[
                    '/images/projects/6/1.jpg',
                    '/images/projects/6/2.jpg',
                    '/images/projects/6/3.jpg',
                    '/images/projects/6/4.jpg',
                    '/images/projects/6/5.jpg',
                    '/images/projects/6/6.jpg',
                    '/images/projects/6/7.jpg',
                    '/images/projects/6/8.jpg',
                ]}
            />

            <Item
                itemIndex={6}
                data={{
                    location: 'Ulus, İstanbul',
                    name: `Z.S ${t('house', { ns: 'common' })}`,
                    size: '135',
                    year: '2021',
                }}
                images={[
                    '/images/projects/7/1.jpg',
                    '/images/projects/7/2.jpg',
                    '/images/projects/7/3.jpg',
                    '/images/projects/7/4.jpg',
                    '/images/projects/7/5.jpg',
                    '/images/projects/7/6.jpg',
                    '/images/projects/7/7.jpg',
                    '/images/projects/7/8.jpg',
                    '/images/projects/7/9.jpg',
                    '/images/projects/7/10.jpg',
                    '/images/projects/7/11.jpg',
                ]}
            />

            <Item
                itemIndex={7}
                data={{
                    location: 'Mandarin Oriental, Bodrum',
                    name: `D.K ${t('house', { ns: 'common' })}`,
                    size: '300',
                    year: '2020',
                }}
                images={[
                    '/images/projects/8/1.jpg',
                    '/images/projects/8/2.jpg',
                    '/images/projects/8/3.jpg',
                    '/images/projects/8/4.jpg',
                    '/images/projects/8/5.jpg',
                    '/images/projects/8/6.jpg',
                    '/images/projects/8/7.jpg',
                    '/images/projects/8/8.jpg',
                    '/images/projects/8/9.jpg',
                ]}
            />

            <Item
                itemIndex={8}
                data={{
                    location: 'Naile Sultan Korusu, İstanbul',
                    name: `A.A ${t('house', { ns: 'common' })}`,
                    size: '125',
                    year: '2020',
                }}
                images={[
                    '/images/projects/9/1.jpg',
                    '/images/projects/9/2.jpg',
                    '/images/projects/9/3.jpg',
                    '/images/projects/9/4.jpg',
                    '/images/projects/9/5.jpg',
                    '/images/projects/9/6.jpg',
                    '/images/projects/9/7.jpg',
                    '/images/projects/9/8.jpg',
                    '/images/projects/9/9.jpg',
                    '/images/projects/9/10.jpg',
                    '/images/projects/9/11.jpg',
                    '/images/projects/9/12.jpg',
                    '/images/projects/9/13.jpg',
                    '/images/projects/9/14.jpg',
                    '/images/projects/9/15.jpg',
                    '/images/projects/9/16.jpg',
                    '/images/projects/9/17.jpg',
                    '/images/projects/9/18.jpg',
                    '/images/projects/9/19.jpg',
                    '/images/projects/9/20.jpg',
                    '/images/projects/9/21.jpg',
                    '/images/projects/9/22.jpg',
                    '/images/projects/9/23.jpg',
                    '/images/projects/9/24.jpg',
                    '/images/projects/9/25.jpg',
                    '/images/projects/9/26.jpg',
                    '/images/projects/9/27.jpg',
                    '/images/projects/9/28.jpg',
                    '/images/projects/9/29.jpg',
                ]}
            />

            <Item
                itemIndex={9}
                data={{
                    location: 'Kalamış, İstanbul',
                    name: `S.O ${t('house', { ns: 'common' })}`,
                    size: '125',
                    year: '2020',
                }}
                images={[
                    '/images/projects/10/1.jpg',
                    '/images/projects/10/2.jpg',
                    '/images/projects/10/3.jpg',
                    '/images/projects/10/4.jpg',
                    '/images/projects/10/5.jpg',
                    '/images/projects/10/6.jpg',
                    '/images/projects/10/7.jpg',
                ]}
            />

            <Item
                itemIndex={10}
                data={{
                    location: 'Kuzguncuk, İstanbul',
                    name: `P.Z ${t('mansion')}`,
                    size: '220',
                    year: '2020',
                }}
                images={[
                    '/images/projects/11/1.jpg',
                    '/images/projects/11/2.jpg',
                    '/images/projects/11/3.jpg',
                    '/images/projects/11/4.jpg',
                    '/images/projects/11/5.jpg',
                    '/images/projects/11/6.jpg',
                    '/images/projects/11/7.jpg',
                    '/images/projects/11/8.jpg',
                    '/images/projects/11/9.jpg',
                ]}
            />

            <Item
                itemIndex={11}
                data={{
                    location: 'Ataköy, İstanbul',
                    name: `A.S ${t('house', { ns: 'common' })}`,
                    size: '130',
                    year: '2020',
                }}
                images={[
                    '/images/projects/12/1.jpg',
                    '/images/projects/12/2.jpg',
                    '/images/projects/12/3.jpg',
                    '/images/projects/12/4.jpg',
                    '/images/projects/12/5.jpg',
                    '/images/projects/12/6.jpg',
                    '/images/projects/12/7.jpg',
                    '/images/projects/12/8.jpg',
                    '/images/projects/12/9.jpg',
                ]}
            />

            <Item
                itemIndex={12}
                data={{
                    location: 'Büyükhanlı Akatlar, İstanbul',
                    name: `G.E ${t('house', { ns: 'common' })}`,
                    size: '160',
                    year: '2020',
                }}
                images={[
                    '/images/projects/13/1.jpg',
                    '/images/projects/13/2.jpg',
                    '/images/projects/13/3.jpg',
                    '/images/projects/13/4.jpg',
                    '/images/projects/13/5.jpg',
                    '/images/projects/13/6.jpg',
                    '/images/projects/13/7.jpg',
                ]}
            />

            <Item
                itemIndex={13}
                data={{
                    location: 'Yeşilyurt, İstanbul',
                    name: `Ç.D ${t('house', { ns: 'common' })}`,
                    size: '28',
                    year: '2019',
                }}
                images={[
                    '/images/projects/14/1.jpg',
                    '/images/projects/14/2.jpg',
                    '/images/projects/14/3.jpg',
                    '/images/projects/14/4.jpg',
                    '/images/projects/14/5.jpg',
                    '/images/projects/14/6.jpg',
                    '/images/projects/14/7.jpg',
                    '/images/projects/14/8.jpg',
                    '/images/projects/14/9.jpg',
                    '/images/projects/14/10.jpg',
                    '/images/projects/14/11.jpg',
                    '/images/projects/14/12.jpg',
                ]}
            />

            <Item
                itemIndex={14}
                data={{
                    location: 'Levent, İstanbul',
                    name: `G.A ${t('house', { ns: 'common' })}`,
                    size: '230',
                    year: '2019',
                }}
                images={[
                    '/images/projects/15/1.jpg',
                    '/images/projects/15/2.jpg',
                    '/images/projects/15/3.jpg',
                    '/images/projects/15/4.jpg',
                    '/images/projects/15/5.jpg',
                    '/images/projects/15/6.jpg',
                    '/images/projects/15/7.jpg',
                    '/images/projects/15/8.jpg',
                    '/images/projects/15/9.jpg',
                    '/images/projects/15/10.jpg',
                    '/images/projects/15/11.jpg',
                    '/images/projects/15/12.jpg',
                    '/images/projects/15/13.jpg',
                ]}
            />

            <Item
                itemIndex={15}
                data={{
                    location: 'Reisdere, Çeşme',
                    name: `I.Ö Yaz ${t('house', { ns: 'common' })}`,
                    size: '220',
                    year: '2019',
                }}
                images={[
                    '/images/projects/16/1.jpg',
                    '/images/projects/16/2.jpg',
                    '/images/projects/16/3.jpg',
                    '/images/projects/16/4.jpg',
                    '/images/projects/16/5.jpg',
                    '/images/projects/16/6.jpg',
                    '/images/projects/16/7.jpg',
                    '/images/projects/16/8.jpg',
                    '/images/projects/16/9.jpg',
                    '/images/projects/16/10.jpg',
                    '/images/projects/16/11.jpg',
                    '/images/projects/16/12.jpg',
                    '/images/projects/16/13.jpg',
                    '/images/projects/16/14.jpg',
                    '/images/projects/16/15.jpg',
                    '/images/projects/16/16.jpg',
                    '/images/projects/16/17.jpg',
                    '/images/projects/16/18.jpg',
                    '/images/projects/16/19.jpg',
                    '/images/projects/16/20.jpg',
                ]}
            />

            <Item
                itemIndex={16}
                data={{
                    location: 'Seba Flora, Levazım, İstanbul',
                    name: `N.C ${t('house', { ns: 'common' })}`,
                    size: '240',
                    year: '2019',
                }}
                images={[
                    '/images/projects/17/1.jpg',
                    '/images/projects/17/2.jpg',
                    '/images/projects/17/3.jpg',
                    '/images/projects/17/4.jpg',
                    '/images/projects/17/5.jpg',
                    '/images/projects/17/6.jpg',
                ]}
            />

            <Item
                itemIndex={17}
                data={{
                    location: 'Mall of İstanbul',
                    name: `Buse’s Garage Sale`,
                    size: '66',
                    year: '2019',
                }}
                images={[
                    '/images/projects/18/1.jpg',
                    '/images/projects/18/2.jpg',
                    '/images/projects/18/3.jpg',
                    '/images/projects/18/4.jpg',
                    '/images/projects/18/5.jpg',
                    '/images/projects/18/6.jpg',
                ]}
            />

            <Item
                itemIndex={18}
                data={{
                    location: 'Arnavutköy, İstanbul',
                    name: `H.Y ${t('house', { ns: 'common' })}`,
                    size: '140',
                    year: '2019',
                }}
                images={[
                    '/images/projects/19/1.jpg',
                    '/images/projects/19/2.jpg',
                    '/images/projects/19/3.jpg',
                    '/images/projects/19/4.jpg',
                    '/images/projects/19/5.jpg',
                    '/images/projects/19/6.jpg',
                    '/images/projects/19/7.jpg',
                    '/images/projects/19/8.jpg',
                    '/images/projects/19/9.jpg',
                    '/images/projects/19/10.jpg',
                    '/images/projects/19/11.jpg',
                    '/images/projects/19/12.jpg',
                    '/images/projects/19/13.jpg',
                    '/images/projects/19/14.jpg',
                    '/images/projects/19/15.jpg',
                    '/images/projects/19/16.jpg',
                    '/images/projects/19/17.jpg',
                ]}
            />

            <Item
                itemIndex={19}
                data={{
                    location: 'Çekmeköy, İstanbul',
                    name: `I.Ö ${t('house', { ns: 'common' })}`,
                    size: '200',
                    year: '2018',
                }}
                images={[
                    '/images/projects/20/1.jpg',
                    '/images/projects/20/2.jpg',
                    '/images/projects/20/3.jpg',
                    '/images/projects/20/4.jpg',
                    '/images/projects/20/5.jpg',
                    '/images/projects/20/6.jpg',
                    '/images/projects/20/7.jpg',
                    '/images/projects/20/8.jpg',
                    '/images/projects/20/9.jpg',
                    '/images/projects/20/10.jpg',
                ]}
            />

            <Item
                itemIndex={20}
                data={{
                    location: 'Bodrum, Muğla',
                    name: `Sahil ${t('house', { ns: 'common' })}`,
                    size: '25',
                    year: '2018',
                }}
                images={[
                    '/images/projects/21/1.jpg',
                    '/images/projects/21/2.jpg',
                    '/images/projects/21/3.jpg',
                    '/images/projects/21/4.jpg',
                    '/images/projects/21/5.jpg',
                    '/images/projects/21/6.jpg',
                    '/images/projects/21/7.jpg',
                    '/images/projects/21/8.jpg',
                    '/images/projects/21/9.jpg',
                    '/images/projects/21/10.jpg',
                ]}
            />

            <Item
                itemIndex={21}
                data={{
                    location: 'Tarabya, İstanbul',
                    name: `Nil'in ${t('room')}`,
                    size: '22',
                    year: '2018',
                }}
                images={[
                    '/images/projects/22/1.jpg',
                    '/images/projects/22/2.jpg',
                    '/images/projects/22/3.jpg',
                    '/images/projects/22/4.jpg',
                    '/images/projects/22/5.jpg',
                    '/images/projects/22/6.jpg',
                ]}
            />

            <Item
                itemIndex={22}
                data={{
                    location: 'Kartal, İstanbul',
                    name: `Proje Pack ${t('office')}`,
                    size: '210',
                    year: '2018',
                }}
                images={[
                    '/images/projects/23/1.jpg',
                    '/images/projects/23/2.jpg',
                    '/images/projects/23/3.jpg',
                    '/images/projects/23/4.jpg',
                    '/images/projects/23/5.jpg',
                    '/images/projects/23/6.jpg',
                ]}
            />

            <Item
                itemIndex={23}
                data={{
                    location: 'Levent, İstanbul',
                    name: `D.A ${t('house', { ns: 'common' })}`,
                    size: '110',
                    year: '2018',
                }}
                images={[
                    '/images/projects/24/1.jpg',
                    '/images/projects/24/2.jpg',
                    '/images/projects/24/3.jpg',
                    '/images/projects/24/4.jpg',
                    '/images/projects/24/5.jpg',
                    '/images/projects/24/6.jpg',
                    '/images/projects/24/7.jpg',
                ]}
            />

            <Item
                itemIndex={24}
                data={{
                    location: 'Seba Ofis Bulvarı, İstanbul',
                    name: `Z.E ${t('lawFirm')}`,
                    size: '220',
                    year: '2018',
                }}
                images={[
                    '/images/projects/25/1.jpg',
                    '/images/projects/25/2.jpg',
                    '/images/projects/25/3.jpg',
                    '/images/projects/25/4.jpg',
                ]}
            />

            <Item
                itemIndex={25}
                data={{
                    location: 'Ataşehir, İstanbul',
                    name: `Z.K ${t('house', { ns: 'common' })}`,
                    size: '110',
                    year: '2017',
                }}
                images={[
                    '/images/projects/26/1.jpg',
                    '/images/projects/26/2.jpg',
                    '/images/projects/26/3.jpg',
                    '/images/projects/26/4.jpg',
                    '/images/projects/26/5.jpg',
                ]}
            />

            <Item
                itemIndex={26}
                data={{
                    location: 'Bodrum, Muğla',
                    name: `B.T ${t('house', { ns: 'common' })}`,
                    size: '220',
                    year: '2017',
                }}
                images={[
                    '/images/projects/27/1.jpg',
                    '/images/projects/27/2.jpg',
                    '/images/projects/27/3.jpg',
                    '/images/projects/27/4.jpg',
                    '/images/projects/27/5.jpg',
                    '/images/projects/27/6.jpg',
                    '/images/projects/27/7.jpg',
                    '/images/projects/27/8.jpg',
                    '/images/projects/27/9.jpg',
                    '/images/projects/27/10.jpg',
                    '/images/projects/27/11.jpg',
                    '/images/projects/27/12.jpg',
                    '/images/projects/27/13.jpg',
                    '/images/projects/27/14.jpg',
                    '/images/projects/27/15.jpg',
                    '/images/projects/27/16.jpg',
                    '/images/projects/27/17.jpg',
                    '/images/projects/27/18.jpg',
                    '/images/projects/27/19.jpg',
                ]}
            />

            <Item
                itemIndex={27}
                data={{
                    location: 'Karşıyaka, İzmir',
                    name: `H.K. ${t('house', { ns: 'common' })}`,
                    size: '120',
                    year: '2017',
                }}
                images={[
                    '/images/projects/28/1.jpg',
                    '/images/projects/28/2.jpg',
                    '/images/projects/28/3.jpg',
                    '/images/projects/28/4.jpg',
                    '/images/projects/28/5.jpg',
                    '/images/projects/28/6.jpg',
                    '/images/projects/28/7.jpg',
                    '/images/projects/28/8.jpg',
                    '/images/projects/28/9.jpg',
                    '/images/projects/28/10.jpg',
                    '/images/projects/28/11.jpg',
                    '/images/projects/28/12.jpg',
                    '/images/projects/28/13.jpg',
                    '/images/projects/28/14.jpg',
                    '/images/projects/28/15.jpg',
                    '/images/projects/28/16.jpg',
                    '/images/projects/28/17.jpg',
                    '/images/projects/28/18.jpg',
                    '/images/projects/28/19.jpg',
                    '/images/projects/28/20.jpg',
                    '/images/projects/28/21.jpg',
                    '/images/projects/28/22.jpg',
                    '/images/projects/28/23.jpg',
                ]}
            />

            <Item
                itemIndex={28}
                data={{
                    location: 'Maslak, İstanbul',
                    name: `E.E. Penthouse`,
                    size: '320',
                    year: '2016',
                }}
                images={[
                    '/images/projects/29/1.jpg',
                    '/images/projects/29/2.jpg',
                    '/images/projects/29/3.jpg',
                    '/images/projects/29/4.jpg',
                    '/images/projects/29/5.jpg',
                    '/images/projects/29/6.jpg',
                    '/images/projects/29/7.jpg',
                    '/images/projects/29/8.jpg',
                    '/images/projects/29/9.jpg',
                    '/images/projects/29/10.jpg',
                    '/images/projects/29/11.jpg',
                    '/images/projects/29/12.jpg',
                ]}
            />

            <Item
                itemIndex={29}
                data={{
                    location: 'Çekmeköy, İstanbul',
                    name: `N.K ${t('house', { ns: 'common' })}`,
                    size: '160',
                    year: '2016',
                }}
                images={[
                    '/images/projects/30/1.jpg',
                    '/images/projects/30/2.jpg',
                    '/images/projects/30/3.jpg',
                    '/images/projects/30/4.jpg',
                    '/images/projects/30/5.jpg',
                ]}
            />
        </Container>
    )
}

export default AllProjects
