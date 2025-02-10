import { useEffect, useState } from 'react'

import { Box, Button, createStyles, Grid, Image, Text, Container } from '@mantine/core'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import { Carousel } from 'react-responsive-carousel'
import { useTranslation } from 'next-i18next'

import imageSize from '@/components/imageSize'
import colors from '@/theme/colors'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '@fancyapps/ui/dist/fancybox.css'

const useStyles = createStyles(theme => ({
    container: {
        position: 'relative',
        marginTop: 20,
        width: '100%',
        height: 'auto',
        border: '1px solid',
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
        backgroundColor: colors.antrazit,
        img: {
            height: '650px !important',
            width: '100%',
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                maxHeight: '192px !important',
            },
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
    title: { color: colors.antrazit, fontWeight: 600, fontSize: 24 },
    content: { marginTop: 20, color: colors.antrazit, lineHeight: '28px', fontWeight: 500, fontSize: 16 },
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

const HomeAward = () => {
    const images = ['/images/awards/1.png', '/images/awards/2.png', '/images/awards/3.png']
    // Hooks
    const { t } = useTranslation('home')
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
        <Container size="xl" sx={{ marginTop: 100 }}>
            <Text className={classes.title}>{t('awardTitle')}</Text>
            <Box className={classes.container}>
                {images.length > 1 ? (
                    <Carousel
                        renderArrowNext={renderArrowNext}
                        renderArrowPrev={renderArrowPrev}
                        {...getConfigurableProps()}
                    >
                        {images.map((image, index) => {
                            return (
                                <Box key={`${index}`} className={classes.item}>
                                    <Image
                                        data-fancybox={`projects`}
                                        className={classes.image}
                                        alt={`award ${index}`}
                                        data-src={image}
                                        fit="contain"
                                        src={image}
                                    />
                                </Box>
                            )
                        })}
                    </Carousel>
                ) : (
                    <Box className={classes.item}>
                        <Image
                            data-fancybox={`projects`}
                            className={classes.image}
                            data-src={images[0]}
                            src={images[0]}
                            fit="contain"
                            alt="award"
                        />
                    </Box>
                )}
            </Box>
            <Text className={classes.content}>{t('awardDesc')}</Text>
        </Container>
    )
}

export default HomeAward
