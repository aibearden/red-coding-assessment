import { getOrders } from "@/app/fetch/orders";
import { OrderInterface } from "@/app/interfaces/orders";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const orderListInitialState: {orders: OrderInterface[]} = {orders: []};

export const orderListSlice = createSlice({
    name: "orders",
    initialState: orderListInitialState,
    reducers: {
        updateOrderList: (state, action: PayloadAction<{orders: OrderInterface[]}>) => {
            state.orders = action.payload.orders;
        }
    }
});

export default orderListSlice.reducer;
export const { updateOrderList } = orderListSlice.actions;