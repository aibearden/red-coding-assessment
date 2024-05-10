import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import orderReducer from "./features/orderSlice";

export const store = configureStore({
    reducer: {
        order: orderReducer
    }
})

export const useCustomAppDispatch: () => typeof store.dispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;