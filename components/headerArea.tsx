import { FC } from 'react'

import { Box, createStyles, Text } from '@mantine/core'

const useStyles = createStyles(theme => ({
    container: {
        backgroundPosition: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        alignItems: 'center',
        position: 'relative',
        display: 'flex',
        height: '300px',
        '&::before': {
            backgroundColor: 'rgba(0,0,0,.4)',
            position: 'absolute',
            display: 'block',
            content: "''",
            bottom: 0,
            right: 0,
            left: 0,
            top: 0,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            height: '200px',
        },
    },
    title: {
        letterSpacing: '10px',
        position: 'relative',
        fontWeight: 300,
        marginTop: 64,
        color: '#fff',
        fontSize: 44,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            marginTop: 84,
            fontSize: 34,
        },
    },
}))

interface IProps {
    backgroundPosition?: string
    imageUrl: string
    title: string
}

const HeaderArea: FC<IProps> = ({ imageUrl, title, backgroundPosition = 'center' }) => {
    // Hooks
    const { classes } = useStyles()

    return (
        <Box sx={{ backgroundPosition, backgroundImage: `url(${imageUrl})` }} className={classes.container}>
            <Text component="h1" className={classes.title}>
                {title}
            </Text>
        </Box>
    )
}

export default HeaderArea
