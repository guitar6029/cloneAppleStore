import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FavoriteItem {
    id: number,
    name: string,
    price: number,
    quantity: number
}

export interface FavoriteItemState {
    favorites: Array<FavoriteItem>
}

const initialState: FavoriteItemState = {
    favorites: [],
}

export const favoriteItemSlice = createSlice({
    name: "favoriteItem",
    initialState: initialState,
    reducers: {
        clearFavoriteItems: (state) => {
            state.favorites = []
        },
        handleFavorites: (state, action: PayloadAction<{ id: number, name: string, price: number, quantity: number }>) => {
            //check if item is alreadt in favorites list
            let item = state.favorites.find((item) => item.id === action.payload.id)
            if (!item) {
                state.favorites.push(action.payload)
            } else {
                //remove item from favorites list
                state.favorites = state.favorites.filter((item) => item.id !== action.payload.id)
            }
        },

    }
})

export const { handleFavorites, clearFavoriteItems } = favoriteItemSlice.actions
//get list of favorites items
export const getFavorites = (state: RootState) => state.favorites.favorites

//check if list is empty
export const isFavoritesListEmpty = (state: RootState) => state.favorites.favorites.length === 0

export default favoriteItemSlice.reducer