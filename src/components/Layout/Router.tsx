import React from 'react'
import { Frontend } from '../../common/constants/fontend'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Resume } from '../Resume/Resume'
import { Works } from '../Works/Works'
import { Contact } from '../Contact/Contact'

export function Router(): JSX.Element {
    return (
        <BrowserRouter basename={Frontend.Basename}>
            <Routes>
                <Route path={Frontend.Url.Home} element={<Home />} />
                <Route path={Frontend.Url.Resume} element={<Resume />} />
                <Route path={Frontend.Url.Works} element={<Works />} />
                <Route path={Frontend.Url.Contact} element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}