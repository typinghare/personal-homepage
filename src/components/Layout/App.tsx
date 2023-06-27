import { JSX } from 'react'
import { Alert, AlertTitle, Container, Link } from '@mui/material'
import { collectStyles } from '../../common/functions/style'

export function App(): JSX.Element {
    const styles = collectStyles({
        root: {
            paddingTop: '2em',
            minHeight: '100vh',
        },
    })

    return (
        <Container sx={styles.root}>
            <Alert severity='info'>
                <AlertTitle>
                    Statement
                </AlertTitle>

                Hello, I'm James, a junior full stack developer, and welcome to my personal website.
                During my leisure time, I enjoy crafting web applications and deploying them right here on this
                platform.
                While the homepage of this website is currently under construction, you can explore my applications by
                following the provided links below: <br />

                <ul>
                    <li>
                        <Link href='https://jameschan.us/bgc'>Board Game Clock</Link>
                    </li>
                    <li>
                        <Link href='https://jameschan.us/supervisor/space/1'>Supervisor 2 (My Space)</Link>
                    </li>
                </ul>
            </Alert>
        </Container>
    )
}