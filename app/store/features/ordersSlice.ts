import { NewOrderInterface } from "@/app/interfaces/orders";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: NewOrderInterface = {
    orderType: "Standard",
    customerName: "",
    createdDate: new Date().toDateString(),
    createdByUserName: ""
}

export const OrdersSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<{newOrder: NewOrderInterface}>) => {
            state = action.payload.newOrder;
        }
    }
});

export default OrdersSlice.reducer;

export const { addOrder } = OrdersSlice.actions;