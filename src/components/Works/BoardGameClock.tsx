import { Slide } from '../Common/Slide'
import { Box, IconButton } from '@mui/material'
import { collectStyles } from '../../common/functions/style'
import { CSSProperties } from 'react'
import BoardGameClockGameSettingsImage from '../../assets/images/board-game-clock_game-settings.png'
import BoardGameClockClockImage from '../../assets/images/board-game-clock_clock.png'
import InsertLinkIcon from '@mui/icons-material/InsertLink'

export function BoardGameClock(): JSX.Element {
    const styles = collectStyles({
        root: {
            backgroundColor: '#E8F3F9',
        },
        title: {
            fontSize: '3em',
            marginBottom: '1em',
        },
        linkButton: {
            marginLeft: '1rem',
            transform: 'rotate(-45deg)',
            '& >svg': {
                color: '#0077b6',
                fontSize: '2rem',
            },
        },
        description: {
            fontSize: '2em',
            marginBottom: '1em',
            padding: '0 2em',
        },
        imageContainer: {
            lineHeight: 0,
        },
        gameSettingsImageContainer: {
            display: 'inline-block',
            marginRight: '2em',
            border: '8px solid #adb5bd',
            borderRadius: '8px',
        },
        clockImageContainer: {
            display: 'inline-block',
            border: '8px solid #adb5bd',
            borderRadius: '8px',
        },
        gameSettingsImage: {
            display: 'inline-block',
            maxHeight: '65vh',
        },
        clockImage: {
            maxHeight: '65vh',
        },
    })

    function onLinkButtonClick() {
        window.location.href = 'https://jameschan.us/bgc'
    }

    return (
        <Slide sx={styles.root}>
            <Box sx={styles.title}>
                Board Game Clock
                <IconButton
                    sx={styles.linkButton}
                    onClick={onLinkButtonClick}
                >
                    <InsertLinkIcon />
                </IconButton>
            </Box>

            <Box sx={styles.description}>
                A touch screen app specifically designed to simulate clocks for a variety of board games,
                including chess and the game of Go.
            </Box>

            <Box sx={styles.imageContainer}>
                <Box sx={styles.gameSettingsImageContainer}>
                    <img
                        style={styles.gameSettingsImage as CSSProperties}
                        src={BoardGameClockGameSettingsImage}
                        alt={'Board game clock (game settings)'}
                    />
                </Box>

                <Box sx={styles.clockImageContainer}>
                    <img
                        style={styles.clockImage as CSSProperties}
                        src={BoardGameClockClockImage}
                        alt={'Board game clock (clock)'}
                    />
                </Box>
            </Box>
        </Slide>
    )
}