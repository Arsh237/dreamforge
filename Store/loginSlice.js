import { createAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    id:" ",
    email:" ",
    
}

export const loginSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        loginUserRedux :(state, action)=>{
            state.id = action.payload.id
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.email = action.payload.email
            state.password = action.payload.password
            console.log(action.payload)
        }
    }
})
export const {loginUserRedux} = loginSlice.actions
export default loginSlice.reducer