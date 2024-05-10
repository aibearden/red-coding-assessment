import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import orderReducer from "./features/orderSlice";
import orderListRedcuer from "./features/orderListSlice";

export const store = configureStore({
    reducer: {
        order: orderReducer,
        orderList: orderListRedcuer
    }
})

export const useCustomAppDispatch: () => typeof store.dispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;