import { Alert } from '@mui/material'
import { collectStyles } from '../../common/functions/style'

export function Resume(): JSX.Element {
    const styles = collectStyles({
        alert: {
            margin: '2em',
        },
    })

    return (
        <>
            <Alert severity='info' sx={styles.alert}>
                The resume page is still under constructor.
            </Alert>
        </>
    )
}