import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { electronicsData } from "../data/dummyData";

export interface DepartmentItem {
    id: number;
    name: string;
    price: number;
    rating: number;
    quantity: number;
}

export interface DepartmentState {
    items: Array<DepartmentItem>;
}

const initialState: DepartmentState = {
    items: [...electronicsData], // Combine your electronics data
};

export const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {
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

export const { updateQuantity, addItem, removeItem } = departmentSlice.actions;

export default departmentSlice.reducer;
