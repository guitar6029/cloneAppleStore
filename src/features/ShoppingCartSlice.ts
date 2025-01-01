import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface ShoppingCartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface ShoppingCartState {
    shoppingCart: Array<ShoppingCartItem>;
}


const initialState: ShoppingCartState = {
    shoppingCart: [],
};

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            state.shoppingCart.push(action.payload);
        },
        removeFromShoppingCart: (state, action: PayloadAction<any>) => {
            state.shoppingCart = state.shoppingCart.filter((item: any) => item.id !== action.payload);
        },
        clearShoppingCart: (state) => {
            state.shoppingCart = [];
        }
    }
})


export const { addToCart, removeFromShoppingCart, clearShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;