import { JSX } from 'react'
import { Box, BoxProps } from '@mui/material'
import { collectStyles } from '../../common/functions/style'

export interface SlideProps extends BoxProps {

}

export function Slide(props: SlideProps): JSX.Element {
    const { children, sx, ...otherProps } = props

    const styles = collectStyles({
        root: {
            width: '100vw',
            minWidth: '100vw',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            justifyItems: 'center',
            justifyContent: 'center',
            ...sx,
        },
    })

    return (
        <Box sx={styles.root} {...otherProps}>
            {children}
        </Box>
    )
}