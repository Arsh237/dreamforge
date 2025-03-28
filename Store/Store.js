import { configureStore} from "@reduxjs/toolkit" 
import usersReducer from "./userslice";
import authRedux from "./loginSlice"
import viewReducer from './viewSlice'
import basketReducer from "./basketSlice"
export  const Store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authRedux,
        view: viewReducer,
        basket: basketReducer
    }
})  

export default Store