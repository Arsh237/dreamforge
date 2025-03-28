import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   basket: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index= state.basket.findIndex((item)=> (item.id === action.payload.id))

            if(index >= 0){
                state.basket[index].qty += 1
                state.basket[index].total = (state.basket[index].qty * state.basket[index].viewData.sellingprice).toString()
            }else{
                // console.log(action.payload.sellingprice)
                const newItem = {
                    ...action.payload.viewData,
                    qty: 1,
                    total: action.payload.viewData.sellingprice,
                    size: action.payload.selectedSize
                }   
                state.basket.push(newItem)
            }
            
        },
        removeItem: (state, action) => {
           
        },
    }
})
export const { addToCart } = basketSlice.actions
export default basketSlice.reducer