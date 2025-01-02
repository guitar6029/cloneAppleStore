import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/ShoppingCartSlice.ts";
import departmentReducer from "./features/DepartmentSlice.ts";
import favoriteReducer from "./features/FavoritesSlice.ts";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        department: departmentReducer,
        favorites: favoriteReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch