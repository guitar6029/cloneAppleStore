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

// Retrieve the initial state from localStorage if it exists
const storedCart = localStorage.getItem('cartItems');
const initialState: ShoppingCartState = {
    shoppingCart: storedCart ? JSON.parse(storedCart) : [],
};

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        clearShoppingCart: (state) => {
            state.shoppingCart = [];
            localStorage.setItem('cartItems', JSON.stringify([]));
        },
        increaseQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const existingItem = state.shoppingCart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                localStorage.setItem('cartItems', JSON.stringify(state.shoppingCart));
            }
        },
        decreaseQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const existingItem = state.shoppingCart.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                    localStorage.setItem('cartItems', JSON.stringify(state.shoppingCart));
                }
            }
        },
        addToCart: (state, action: PayloadAction<any>) => {
            const existingItem = state.shoppingCart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.shoppingCart.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.shoppingCart));
        },
        removeFromShoppingCart: (state, action: PayloadAction<any>) => {
            state.shoppingCart = state.shoppingCart.filter((item: any) => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.shoppingCart));
        }
    }
});

export const { clearShoppingCart, increaseQuantity, decreaseQuantity, addToCart, removeFromShoppingCart } = shoppingCartSlice.actions;

export const getCartItems = (state: RootState) => state.cart.shoppingCart;

export const isShoppingCartEmpty = (state: RootState) => state.cart.shoppingCart.length === 0;

export default shoppingCartSlice.reducer;
