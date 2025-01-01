import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


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
            const existingItem = state.shoppingCart.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If the item exists, increment the quantity
                existingItem.quantity += 1;
                console.log('existingItem', existingItem);
            } else {
                // If the item doesn't exist, add it with quantity: 1
                state.shoppingCart.push({ ...action.payload, quantity: 1 });
            }
            
            console.log('state.shoppingCart', state.shoppingCart);
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

//getter for shopping cart items
export const getCartItems = (state: RootState) => state.cart.shoppingCart;

export default shoppingCartSlice.reducer;