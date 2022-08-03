import { FC } from 'react'

import { Box, Button, createStyles, Image, Text } from '@mantine/core'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import { Carousel } from 'react-responsive-carousel'

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
            height: 'auto',
        },
    },
    image: {
        backgroundColor: '#fff',
        width: '100%',
        img: {
            height: '650px !important',
            width: '100%',
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                height: '250px !important',
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
                                        data-fancybox={`projects-${itemIndex}`}
                                        alt={`${title} ${subTitle} ${index}`}
                                        className={classes.image}
                                        data-src={image}
                                        fit="contain"
                                        src={image}
                                    />
                                </Box>
                            )
                        })}
                    </Carousel>
                ) : (
                    images.length === 1 && (
                        <Box className={classes.item}>
                            <Image
                                data-fancybox={`news-${itemIndex}`}
                                className={classes.image}
                                data-src={images[0]}
                                alt={`${title} 0`}
                                src={images[0]}
                            />
                        </Box>
                    )
                )}
            </Box>
        </>
    )
}

export default Item
