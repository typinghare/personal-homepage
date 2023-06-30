import { Slide } from '../Common/Slide'
import { Box, IconButton } from '@mui/material'
import SupervisorDesktopImage from '../../assets/images/supervisor_desktop.png'
import SupervisorMobileImage from '../../assets/images/supervisor_mobile.png'
import { collectStyles } from '../../common/functions/style'
import { CSSProperties } from 'react'
import InsertLinkIcon from '@mui/icons-material/InsertLink'

export function Supervisor(): JSX.Element {
    const styles = collectStyles({
        root: {
            backgroundColor: 'transparent',
        },
        title: {
            fontSize: '3em',
            marginBottom: '2rem',
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
            marginBottom: '2rem',
            padding: '0 2em',
        },
        imageContainer: {
            lineHeight: 0,
        },
        supervisorDesktopImageContainer: {
            display: 'inline-block',
            marginRight: '2rem',
            border: '8px solid #adb5bd',
            borderRadius: '8px',
        },
        supervisorMobileImageContainer: {
            display: 'inline-block',
            border: '8px solid #adb5bd',
            borderRadius: '8px',
        },
        supervisorDesktopImage: {
            maxHeight: '65vh',
        },
        supervisorMobileImage: {
            maxHeight: '65vh',
        },
    })

    function onLinkButtonClick() {
        window.location.href = 'https://jameschan.us/supervisor/space/1'
    }

    return (
        <Slide sx={styles.root}>
            <Box sx={styles.title}>
                Supervisor 2
                <IconButton
                    sx={styles.linkButton}
                    onClick={onLinkButtonClick}
                >
                    <InsertLinkIcon />
                </IconButton>
            </Box>

            <Box sx={styles.description}>
                A responsive web app that simplifies task management and boosts productivity.
            </Box>

            <Box sx={styles.imageContainer}>
                <Box sx={styles.supervisorDesktopImageContainer}>
                    <img
                        style={styles.supervisorDesktopImage as CSSProperties}
                        src={SupervisorDesktopImage}
                        alt={'Supervisor desktop'}
                    />
                </Box>

                <Box sx={styles.supervisorMobileImageContainer}>
                    <img
                        style={styles.supervisorMobileImage as CSSProperties}
                        src={SupervisorMobileImage}
                        alt={'Supervisor mobile'}
                    />
                </Box>
            </Box>
        </Slide>
    )
}