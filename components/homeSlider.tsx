import { useCallback, useEffect, useRef, useState } from 'react'

import { Box, Button, Center, Container, createStyles, Text } from '@mantine/core'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import { motion, AnimatePresence } from 'framer-motion'

const useStyles = createStyles(theme => ({
    sliderImage: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
    },
    sliderOverlay: {
        backgroundColor: 'rgba(0,0,0,.45)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        width: '100%',
    },
    sliderTitle: {
        position: 'relative',
        textAlign: 'center',
        marginBottom: 24,
        fontWeight: 300,
        fontSize: 32,
        color: '#fff',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 24,
        },
    },
    sliderTitleBack: {
        WebkitTextFillColor: 'transparent',
        transform: 'translate(-50%, -55%)',
        WebkitTextStrokeColor: '#fff',
        WebkitTextStrokeWidth: '1px',
        position: 'absolute',
        fontWeight: 600,
        width: '100vw',
        opacity: 0.35,
        fontSize: 90,
        left: '50%',
        top: '50%',
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            fontSize: 70,
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            fontSize: 60,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            display: 'none',
        },
    },
    sliderText: {
        textAlign: 'center',
        marginBottom: 24,
        fontSize: '16px',
        fontWeight: 300,
        color: '#fff',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 14,
        },
    },
}))

const HomeSlider = () => {
    const [activeSlider, setActiveSlider] = useState(0)
    const [images] = useState([
        {
            image: '/images/slider/1.jpg',
            title: 'İç Mekan',
            content: 'İç mekânları arındırmanın en pratik, hızlı, zahmetsiz ve eğlenceli biçimi!',
        },
        {
            image: '/images/slider/2.jpg',
            title: 'Hızlı Çözüm',
            content: 'İç mekânlar sadece birkaç günde arınıyor ve yenileniyor.',
        },
    ])
    // Hooks
    const { classes } = useStyles()
    // Refs
    const loopRef: { current: NodeJS.Timer | null } = useRef(null)

    useEffect(() => {
        startLoop()
        return () => {
            if (loopRef.current) clearInterval(loopRef.current)
        }
    }, [])

    const startLoop = useCallback(() => {
        loopRef.current = setInterval(() => {
            onChangeSlider('next')
        }, 6000)
    }, [])

    const onChangeSlider = useCallback((type: string, isClick?: boolean) => {
        setActiveSlider(prev => {
            if (type === 'next') {
                return prev + 1 > 1 ? 0 : prev + 1
            } else {
                return prev - 1 < 0 ? 2 : prev - 1
            }
        })

        if (isClick && loopRef.current) {
            clearInterval(loopRef.current)
            startLoop()
        }
    }, [])

    return (
        <Box sx={{ height: '100vh', minHeight: 600, position: 'relative' }}>
            {images.map((item, index) => {
                return (
                    <motion.div
                        animate={{ opacity: activeSlider === index ? 1 : 0, zIndex: activeSlider === index ? 1 : -1 }}
                        style={{ backgroundImage: `url(${item.image})` }}
                        className={classes.sliderImage}
                        key={index}
                    >
                        <Box className={classes.sliderOverlay}>
                            <Container size="sm">
                                <AnimatePresence exitBeforeEnter>
                                    <motion.div
                                        initial={{ bottom: -50, opacity: 0 }}
                                        animate={{ bottom: 0, opacity: 1 }}
                                        style={{ position: 'relative' }}
                                        transition={{ delay: 0.5 }}
                                        key={activeSlider}
                                    >
                                        <Text component="h1" className={classes.sliderTitle}>
                                            {item.title}
                                            <Text component="span" className={classes.sliderTitleBack}>
                                                {item.title}
                                            </Text>
                                        </Text>
                                    </motion.div>
                                </AnimatePresence>

                                <AnimatePresence exitBeforeEnter>
                                    <motion.div
                                        key={activeSlider}
                                        initial={{ bottom: -50, opacity: 0 }}
                                        animate={{ bottom: 0, opacity: 1 }}
                                        style={{ position: 'relative' }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <Text component="p" className={classes.sliderText}>
                                            {item.content}
                                        </Text>
                                    </motion.div>
                                </AnimatePresence>
                                <Center>
                                    <AnimatePresence exitBeforeEnter>
                                        <motion.div
                                            key={activeSlider}
                                            initial={{ bottom: -50, opacity: 0 }}
                                            animate={{ bottom: 0, opacity: 1 }}
                                            style={{ position: 'relative' }}
                                            transition={{ delay: 0.9 }}
                                        >
                                            <Button
                                                component="a"
                                                href="/projects"
                                                color="dark"
                                                radius="xl"
                                                size="lg"
                                                sx={{ fontSize: 14, fontWeight: 400 }}
                                            >
                                                Projeleri Gör
                                            </Button>
                                        </motion.div>
                                    </AnimatePresence>
                                </Center>
                            </Container>
                        </Box>
                    </motion.div>
                )
            })}

            <Box
                sx={{
                    border: '1px solid rgba(255,255,255,.3)',
                    borderBottom: 'none',
                    position: 'absolute',
                    display: 'flex',
                    zIndex: 2,
                    bottom: 0,
                    right: 0,
                }}
            >
                <Button
                    sx={{
                        ':hover': { backgroundColor: 'rgba(255,255,255,.3)' },
                        transform: 'translateY(0px) !important',
                        backgroundColor: 'transparent',
                    }}
                    radius={0}
                    size="xl"
                    onClick={() => onChangeSlider('prev', true)}
                >
                    <ChevronLeft />
                </Button>
                <Box sx={{ borderRight: '1px solid rgba(255,255,255,.3)' }} />
                <Button
                    sx={{
                        ':hover': { backgroundColor: 'rgba(255,255,255,.3)' },
                        transform: 'translateY(0px) !important',
                        backgroundColor: 'transparent',
                    }}
                    radius={0}
                    size="xl"
                    onClick={() => onChangeSlider('next', true)}
                >
                    <ChevronRight />
                </Button>
            </Box>
        </Box>
    )
}

export default HomeSlider
