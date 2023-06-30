import { Supervisor } from './Supervisor'
import { BoardGameClock } from './BoardGameClock'
import { Box } from '@mui/material'

export function Works(): JSX.Element {
    return (
        <Box>
            <Supervisor />
            <BoardGameClock />
        </Box>
    )
}