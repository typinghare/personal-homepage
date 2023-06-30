import { useEffect } from 'react'
import { Frontend } from '../common/constants/fontend'
import { useAppDispatch } from '../redux/hook'
import { switchPage } from '../redux/slice/GlobalSlice'


/**
 * This component includes all initial events when the app bootstraps. Note that the app bootstraps when the webpage
 * being refreshed.
 */
export function AppBootstrap(): JSX.Element {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const url = window.location.pathname
        if (url === Frontend.Url.Home) {
            dispatch(switchPage('home'))
        } else if (url === Frontend.Url.Resume) {
            dispatch(switchPage('resume'))
        } else if (url === Frontend.Url.Works) {
            dispatch(switchPage('works'))
        } else if (url === Frontend.Url.Contact) {
            dispatch(switchPage('contact'))
        }
    }, [dispatch]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <></>
    )
}