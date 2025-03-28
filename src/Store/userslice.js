import { createAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    id:" ",
    firstname:" ",
    lastname:" ",
    email:" ",
    password:" ",
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        registerUserRedux :(state, action)=>{
            state.id = action.payload.id
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.email = action.payload.email
            state.password = action.payload.password
            console.log(action.payload)
        }
    }
})
export const {registerUserRedux} = userSlice.actions
export default userSlice.reducer