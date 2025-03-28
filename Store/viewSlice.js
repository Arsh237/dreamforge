import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    viewBasket: []
}

export const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        addView: (state, action) => {
            state.viewBasket = action.payload
        },
        removeView: (state, action) => {
            state.viewBasket = state.viewBasket.filter((item) => item.id !== action.payload.id)
        },
    }
})
export const { addView, removeView } = viewSlice.actions
export default viewSlice.reducer