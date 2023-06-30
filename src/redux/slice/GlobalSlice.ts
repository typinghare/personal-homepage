import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Frontend } from '../../common/constants/fontend'
import PageName = Frontend.PageName

export interface GlobalState {
    pageName: Frontend.PageName
}

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        pageName: 'home',
    } as GlobalState,
    reducers: {
        switchPage(state: GlobalState, pageNameAction: PayloadAction<PageName>) {
            state.pageName = pageNameAction.payload
        },
    },
})

export const { switchPage } = globalSlice.actions

export const selectPageName = (state: RootState) => state.global.pageName

export default globalSlice.reducer