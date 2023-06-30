import { AppBar, Box, Link, Toolbar } from '@mui/material'
import { collectStyles } from '../../common/functions/style'
import { useAppSelector } from '../../redux/hook'
import { selectPageName } from '../../redux/slice/GlobalSlice'
import { Frontend } from '../../common/constants/fontend'
import PageName = Frontend.PageName

export function Navigation(): JSX.Element {
    const pageName: PageName = useAppSelector(selectPageName)
    const styles = collectStyles({
        root: {
            position: 'relative',
            backgroundColor: 'transparent',
            borderBottom: 'none',
            boxShadow: 'none',
            padding: '16px 15%',
        },
        left: {
            fontSize: '1.5em',
            fontWeight: 'bold',
            color: '#001d3d',
        },
        right: {
            marginLeft: 'auto',
            display: 'flex',
            gap: '0.5rem',
            fontWeight: 'bold',
        },
    })

    return (
        <AppBar sx={styles.root}>
            <Toolbar>
                <Box sx={styles.left}>
                    James Chan
                </Box>
                <Box sx={styles.right}>
                    <NavigationLink
                        label={'HOME'}
                        href={Frontend.Url.Home}
                        selected={pageName === 'home'}
                    />

                    <NavigationLink
                        label={'Resume'}
                        href={Frontend.Url.Resume}
                        selected={pageName === 'resume'}
                    />

                    <NavigationLink
                        label={'Works'}
                        href={Frontend.Url.Works}
                        selected={pageName === 'works'}
                    />

                    <NavigationLink
                        label={'Contact'}
                        href={Frontend.Url.Contact}
                        selected={pageName === 'contact'}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export interface NavigationLinkProps {
    label: string
    href: string
    selected: boolean
}

export function NavigationLink(props: NavigationLinkProps): JSX.Element {
    const { label, href, selected } = props

    const styles = collectStyles({
        root: {
            color: selected ? '#0077b6' : '#6c757d',
            textDecoration: 'none',
            padding: '0.5em',
            '&:hover': {
                borderRadius: '0.25em',
                backgroundColor: '#dfe7fd',
                transition: 'all .5s ease-in-out',
            },
        },
    })

    return (
        <Link href={href} sx={styles.root}>
            {label}
        </Link>
    )
}