import { FC } from 'react'

import { Box, Button, createStyles, Image, Text } from '@mantine/core'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import { Carousel } from 'react-responsive-carousel'
import chunk from 'lodash.chunk'

import colors from '@/theme/colors'

const useStyles = createStyles(theme => ({
    container: {
        position: 'relative',
        marginTop: 40,
        width: '100%',
        height: 710,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            height: 'auto',
        },
    },
    item: {
        cursor: 'pointer',
        display: 'flex',
        width: '100%',
        height: 650,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column',
            height: 400,
        },
    },
    itemInner: {
        flex: 1,
        '&.left': {
            paddingRight: 15,
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                paddingRight: 0,
            },
        },
        '&.right': {
            paddingLeft: 15,
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                paddingLeft: 0,
            },
        },
    },
    image: {
        backgroundColor: '#fff',
        img: {
            height: '650px !important',
            width: '100%',
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                height: '200px !important',
            },
        },
    },
    titleArea: {
        backgroundColor: colors.antrazit,
        alignItems: 'flex-start',
        flexDirection: 'column',
        display: 'flex',
        width: '100%',
        padding: 12,
    },
    title: {
        color: colors.lightGray,
        letterSpacing: '1px',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 18,
        margin: 0,
    },
    subTitle: {
        color: colors.lightGray,
        letterSpacing: '1px',
        textAlign: 'center',
        fontWeight: 300,
        fontSize: 14,
        margin: 0,
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
    itemIndex: number
    subTitle: string
    images: string[]
    title: string
}

const Item: FC<IProps> = ({ title, subTitle, images, itemIndex }) => {
    // Hooks
    const { classes } = useStyles()

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
                <Box className={classes.titleArea}>
                    <Text component="h2" className={classes.title}>
                        {title}
                    </Text>
                    <Text component="h3" className={classes.subTitle}>
                        {subTitle}
                    </Text>
                </Box>
                {images.length > 2 ? (
                    <Carousel
                        renderArrowNext={renderArrowNext}
                        renderArrowPrev={renderArrowPrev}
                        {...getConfigurableProps()}
                    >
                        {chunk(images, 2).map((items, index) => {
                            return (
                                <Box key={`${index}-${itemIndex}`} className={classes.item}>
                                    {items.map((image, i) => {
                                        return (
                                            <div key={`${itemIndex}-${index}-${i}`}>
                                                <Box className={`${classes.itemInner} ${i === 0 ? 'left' : 'right'}`}>
                                                    <Image
                                                        data-fancybox={`news-${itemIndex}`}
                                                        className={classes.image}
                                                        alt={`${title} ${index} ${i}`}
                                                        data-src={image}
                                                        src={image}
                                                    />
                                                </Box>
                                                {items.length === 1 && <Box className={`${classes.itemInner} right`} />}
                                            </div>
                                        )
                                    })}
                                </Box>
                            )
                        })}
                    </Carousel>
                ) : (
                    images.length !== 0 && (
                        <Box className={classes.item}>
                            <Box className={`${classes.itemInner} left`}>
                                <Image
                                    data-fancybox={`news-${itemIndex}`}
                                    className={classes.image}
                                    data-src={images[0]}
                                    alt={`${title} 0`}
                                    src={images[0]}
                                />
                            </Box>
                            <Box className={`${classes.itemInner} right`}>
                                {images[1] !== undefined && (
                                    <Image
                                        data-fancybox={`news-${itemIndex}`}
                                        className={classes.image}
                                        data-src={images[1]}
                                        alt={`${title} 1`}
                                        src={images[1]}
                                    />
                                )}
                            </Box>
                        </Box>
                    )
                )}
            </Box>
        </>
    )
}

export default Item
