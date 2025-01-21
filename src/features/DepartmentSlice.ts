import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { data } from "../data/dummyData";

export interface DepartmentItem {
    id: number;
    name: string;
    price: number;
    rating: number;
    quantity: number;
    originalQuantity: number
}

export interface DepartmentState {
    items: Array<DepartmentItem>;
}

const initialState: DepartmentState = {
    items: data.map(item => ({ ...item })),
};

export const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {
        resetQuantity: ( state) => {
          // reset quantity values for the items in the payload
          state.items = state.items.map(item => ({ ...item, quantity: item.originalQuantity}));
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        addItem: (state, action: PayloadAction<DepartmentItem>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { resetQuantity, updateQuantity, addItem, removeItem } = departmentSlice.actions;

export default departmentSlice.reducer;
