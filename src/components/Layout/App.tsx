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

                Hi, my name is James, a junior full stack developer, and this is my personal website.
                I like writing web application in my leisure time, and deploying them on my personal website.
                The homepage of this website is still under construction, but you can check out my applications
                by following links: <br />

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