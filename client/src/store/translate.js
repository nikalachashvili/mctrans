import { createSlice } from "@reduxjs/toolkit";

let initalData = {
    language: 'ka'
}

const siteTranslate = createSlice({
    name: 'language',
    initialState: initalData,
    reducers: {
        changeLanguage(state, action){
            state.language = action.payload
        }
    }
})

export const siteTranslateAction = siteTranslate.actions

export default siteTranslate.reducer