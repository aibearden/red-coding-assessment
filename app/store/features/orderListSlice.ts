import { OrderInterface } from "@/app/interfaces/orders";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const orderListInitialState: OrderInterface[] = [];

export const OrderListSlice = createSlice({
    name: "orders",
    initialState: orderListInitialState,
    reducers: {
        updateOrderList: (state, action: PayloadAction<{orders: OrderInterface[]}>) => {
            state = action.payload.orders;
        }
    }
});

export default OrderListSlice.reducer;
export const { updateOrderList } = OrderListSlice.actions;