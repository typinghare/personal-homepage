import { AppBootstrap } from './AppBootstrap'
import { Router } from './Layout/Router'
import { Navigation } from './Layout/Navigation'
import { Box } from '@mui/material'

export function App(): JSX.Element {
    return (
        <Box>
            <AppBootstrap />
            <Navigation />
            <Router />
        </Box>
    )
}