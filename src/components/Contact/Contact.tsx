import { collectStyles } from '../../common/functions/style'
import { Alert } from '@mui/material'

export function Contact(): JSX.Element {
    const styles = collectStyles({
        alert: {
            margin: '2em',
        },
    })

    return (
        <>
            <Alert severity='info' sx={styles.alert}>
                The contact page is still under constructor.
            </Alert>
        </>
    )
}