import { FC, useEffect, useState } from 'react'

import { Box, Button, createStyles, Grid, Image, Text } from '@mantine/core'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import { Carousel } from 'react-responsive-carousel'
import { useTranslation } from 'next-i18next'

import imageSize from '@/components/imageSize'
import colors from '@/theme/colors'

const useStyles = createStyles(theme => ({
    container: {
        position: 'relative',
        marginTop: 40,
        width: '100%',
        height: 710,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            height: 510,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            height: 'auto',
        },
    },
    item: {
        cursor: 'pointer',
        width: '100%',
        height: 650,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            maxHeight: 450,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxHeight: 200,
        },
    },
    image: {
        backgroundColor: '#fff',
        img: {
            height: '650px !important',
            width: '100%',
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                maxHeight: '192px !important',
            },
        },
    },
    itemContents: {
        backgroundColor: 'rgba(45, 49, 52, 0.9)',
        position: 'absolute',
        width: '50%',
        height: 95,
        bottom: 20,
        left: 0,
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            width: '60%',
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: '80%',
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            position: 'relative',
            height: 'auto',
            width: '100%',
            bottom: 0,
            left: 8,
        },
    },
    contentItem: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexBasis: '50%',
            maxWidth: '50%',
            width: '50%',
        },
    },
    contentTitle: {
        color: colors.lightGray,
        letterSpacing: '1px',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 14,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 12,
        },
    },
    contentValue: {
        color: colors.lightGray,
        letterSpacing: '1px',
        textAlign: 'center',
        fontWeight: 300,
        fontSize: 14,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 12,
        },
    },
    arrow: {
        border: `1px solid ${colors.antrazit}`,
        backgroundColor: '#fff !important',
        position: 'absolute',
        borderRadius: '50%',
        padding: 0,
        height: 35,
        width: 35,
        zIndex: 2,
        bottom: 20,
        '&.right': {
            right: 30,
        },
        '&.left': {
            right: 70,
        },
    },
}))

const getConfigurableProps = () => ({
    swipeScrollTolerance: 5,
    useKeyboardArrows: true,
    showIndicators: false,
    emulateTouch: true,
    infiniteLoop: true,
    showThumbs: false,
    showStatus: false,
    showArrows: true,
    swipeable: true,
    autoPlay: false,
})

interface IProps {
    data: {
        location: string
        name: string
        size: string
        year: string
    }
    images: string[]
    itemIndex: number
}

const Item: FC<IProps> = ({ data, images, itemIndex }) => {
    const [isCovers, setIsCovers] = useState<boolean[]>([])
    // Hooks
    const { t } = useTranslation(['projects'])
    const { classes } = useStyles()

    useEffect(() => {
        getSizes()
    }, [])

    const getSizes = async () => {
        let sizes: boolean[] = images.map(() => true)
        for (var i = 0; i < images.length; i++) {
            const size: { width: number; height: number } = await imageSize(images[i])
            if (size.width && size.height) {
                const isPortrait = size.width < size.height
                sizes[i] = isPortrait
            }
        }
        setIsCovers(sizes)
    }

    const renderArrowPrev = (clickHandler: () => void) => {
        return (
            <Button onClick={clickHandler} className={`${classes.arrow} left`}>
                <ChevronLeft size={20} strokeWidth={2} color={colors.antrazit} />
            </Button>
        )
    }
    const renderArrowNext = (clickHandler: () => void) => {
        return (
            <Button onClick={clickHandler} className={`${classes.arrow} right`}>
                <ChevronRight size={20} strokeWidth={2} color={colors.antrazit} />
            </Button>
        )
    }

    return (
        <>
            <Box className={classes.container}>
                {images.length > 1 ? (
                    <Carousel
                        renderArrowNext={renderArrowNext}
                        renderArrowPrev={renderArrowPrev}
                        {...getConfigurableProps()}
                    >
                        {images.map((image, index) => {
                            return (
                                <Box key={`${index}-${itemIndex}`} className={classes.item}>
                                    <Image
                                        fit={isCovers[index] ? 'contain' : 'cover'}
                                        data-fancybox={`projects-${itemIndex}`}
                                        alt={`${data.name} ${index}`}
                                        className={classes.image}
                                        data-src={image}
                                        src={image}
                                    />
                                </Box>
                            )
                        })}
                    </Carousel>
                ) : (
                    <Box className={classes.item}>
                        <Image
                            data-fancybox={`projects-${itemIndex}`}
                            fit={isCovers[0] ? 'contain' : 'cover'}
                            className={classes.image}
                            data-src={images[0]}
                            alt={data.name}
                            src={images[0]}
                        />
                    </Box>
                )}

                <Grid className={classes.itemContents} columns={5}>
                    <Grid.Col className={classes.contentItem} span={1}>
                        <Text className={classes.contentTitle}>{t('project')}</Text>
                        <Text className={classes.contentValue}>{data.name}</Text>
                    </Grid.Col>
                    <Grid.Col className={classes.contentItem} span={2}>
                        <Text className={classes.contentTitle}>{t('location')}</Text>
                        <Text className={classes.contentValue}>{data.location}</Text>
                    </Grid.Col>
                    <Grid.Col className={classes.contentItem} span={1}>
                        <Text className={classes.contentTitle}>
                            M<sup>2</sup>
                        </Text>
                        <Text className={classes.contentValue}>
                            {data.size} m<sup>2</sup>
                        </Text>
                    </Grid.Col>
                    <Grid.Col className={classes.contentItem} span={1}>
                        <Text className={classes.contentTitle}>{t('year')}</Text>
                        <Text className={classes.contentValue}>{data.year}</Text>
                    </Grid.Col>
                </Grid>
            </Box>
        </>
    )
}

export default Item
