import { Slide } from '../Common/Slide'
import { Box } from '@mui/material'

export function SelfIntroductionSlide(): JSX.Element {
    return (
        <Slide>
            <Box sx={{ fontSize: '3em', marginBottom: '2em' }}>
                Hello, I'm <b>James Chan</b>
            </Box>
        </Slide>
    )
}