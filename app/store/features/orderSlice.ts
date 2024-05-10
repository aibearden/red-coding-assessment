import { NewOrderInterface } from "@/app/interfaces/orders";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const orderInitialState: NewOrderInterface = {
    orderType: "Standard",
    customerName: "",
    createdDate: new Date().toDateString(),
    createdByUserName: ""
}

export const orderSlice = createSlice({
    name: "order",
    initialState: orderInitialState,
    reducers: {
        addOrderType: (state, action: PayloadAction<{orderType: string}>) => {
            state.orderType = action.payload.orderType;
        },
        addCustomerName: (state, action: PayloadAction<{customerName: string}>) => {
            state.customerName = action.payload.customerName;
        },
        addCreatedByUserName: (state, action: PayloadAction<{createdByUserName: string}>) => {
            state.createdByUserName = action.payload.createdByUserName;
        }
    }
});

export const {addOrderType, addCustomerName, addCreatedByUserName} = orderSlice.actions;
export default orderSlice.reducer;
