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
        increaseQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
          //first check if the item exists
          const existingItem = state.shoppingCart.find(item => item.id === action.payload.id);
          if (existingItem) {
            // if exists , then increment the quantity +1
            existingItem.quantity += 1;
          }  
        },
        decreaseQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            // check if the item exists
            const existingItem = state.shoppingCart.find(item => item.id === action.payload.id);
           if (existingItem) {
            if (existingItem.quantity === 1) {
                // do not decrease quantity if quantity is 1
                return
            }
            // if exists, then decrease by -1
            existingItem.quantity -= 1;
           } 
        },
        addToCart: (state, action: PayloadAction<any>) => {
            const existingItem = state.shoppingCart.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If the item exists, increment the quantity
                existingItem.quantity += 1;
            } else {
                // If the item doesn't exist, add it with quantity: 1
                state.shoppingCart.push({ ...action.payload, quantity: 1 });
            }

        },
        removeFromShoppingCart: (state, action: PayloadAction<any>) => {
            state.shoppingCart = state.shoppingCart.filter((item: any) => item.id !== action.payload);
        },
        clearShoppingCart: (state) => {
            state.shoppingCart = [];
        }
    }
})


export const { increaseQuantity, decreaseQuantity, addToCart, removeFromShoppingCart, clearShoppingCart } = shoppingCartSlice.actions;

//getter for shopping cart items
export const getCartItems = (state: RootState) => state.cart.shoppingCart;

// check if shopping cart is empty
export const isShoppingCartEmpty = (state: RootState) => state.cart.shoppingCart.length === 0;

export default shoppingCartSlice.reducer;