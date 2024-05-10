"use client"

import { Dialog, FormControl, InputLabel, Input, Stack, DialogTitle, DialogContent, Button } from "@mui/material";
import OrderTypeMenu from "./OrderTypeMenu";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { addCreatedByUserName, addCustomerName, addOrderType } from "../store/features/orderSlice";
import { postOrder } from "../fetch/orders";

export default function OrderModal({ open, setOpen }: { open: boolean, setOpen: (arg0: boolean) => void }) {

    const dispatch = useDispatch();
    const order = useSelector((state: RootState) => state.order);

    function saveOrder() {
        postOrder(order).then(_ => {
            setOpen(false);
        })
    }

    function cancelChange() {
        dispatch(addOrderType({orderType: "Standard"}));
        dispatch(addCustomerName({customerName: ""}));
        dispatch(addCreatedByUserName({createdByUserName: ""}));
        setOpen(false);
    }

    return (
        <Dialog onClose={() => setOpen(false)} open={open} id="order-modal">
            <DialogTitle>New Order</DialogTitle>
            <DialogContent sx={{ height: 400, width: 300 }}>
                <Stack sx={{ height: '90%' }} direction={'column'} justifyContent={'space-evenly'}>
                    <OrderTypeMenu orderType={order?.orderType} setOrderType={(orderType: string) => dispatch(addOrderType({orderType: orderType}))} />
                    <FormControl variant="standard" id={"customer-name"}>
                        <InputLabel>Customer Name</InputLabel>
                        <Input id="customer-name" defaultValue="" value={order?.customerName} onChange={(evt) => dispatch(addCustomerName({customerName: evt.target.value}))} />
                    </FormControl>
                    <FormControl variant="standard" id={"user-name"}>
                        <InputLabel>Created By User Name</InputLabel>
                        <Input id="created-by-user-name" defaultValue="" value={order?.createdByUserName} onChange={(evt) => dispatch(addCreatedByUserName({createdByUserName: evt.target.value}))} />
                    </FormControl>
                </Stack>
                <Stack sx={{height: '8%', marginTop: '4%'}} direction={'row'} justifyContent={'flex-end'}>
                    <Button size={'small'} variant={'outlined'} onClick={cancelChange}>Cancel</Button>
                    <Button sx={{marginLeft: '4px'}} size={'small'} variant={'contained'} onClick={saveOrder}>Save</Button>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}