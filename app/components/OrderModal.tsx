"use client"

import { Dialog, FormControl, InputLabel, Input, Stack, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import { postOrder } from "../fetch/orders";
import OrderTypeMenu from "./OrderTypeMenu";
import { NewOrderInterface } from "../interfaces/orders";
import { useAppDispatch } from "@/lib/hooks";

export default function OrderModal({ open, setOpen }: { open: boolean, setOpen: (arg0: boolean) => void }) {
    const dispath = useAppDispatch();
    const [newOrder, setNewOrder] = useState<NewOrderInterface>({
        orderType: "Standard",
        customerName: "",
        createdDate: new Date().toDateString(),
        createdByUserName: ""
    });


    function saveOrder() {
        postOrder(newOrder).then(_ => {
            setOpen(false);
        })
    }

    return (
        <Dialog onClose={() => setOpen(false)} open={open}>
            <DialogTitle>New Order</DialogTitle>
            <DialogContent sx={{ height: 400, width: 300 }}>
                <Stack sx={{ height: '90%' }} direction={'column'} justifyContent={'space-evenly'}>
                    {/* <FormControl variant="standard" id={"order-id"}>
                            <InputLabel>Order Id</InputLabel>
                            <Input id="order-id" defaultValue="" value={newOd}/>
                        </FormControl> */}
                    <OrderTypeMenu orderType={newOrder.orderType} setOrderType={(orderType: string) => setNewOrder({...newOrder, orderType: orderType})} />
                    <FormControl variant="standard" id={"customer-name"}>
                        <InputLabel>Customer Name</InputLabel>
                        <Input id="customer-name" defaultValue="" value={newOrder.customerName} onChange={(evt) => setNewOrder({...newOrder, customerName: evt.target.value})} />
                    </FormControl>
                    <FormControl variant="standard" id={"user-name"}>
                        <InputLabel>Created By User Name</InputLabel>
                        <Input id="created-by-user-name" defaultValue="" value={newOrder.createdByUserName} onChange={(evt) => setNewOrder({...newOrder, createdByUserName: evt.target.value})} />
                    </FormControl>
                </Stack>
                <Stack sx={{height: '8%', marginTop: '4%'}} direction={'row'} justifyContent={'flex-end'}>
                    <Button size={'small'} variant={'outlined'} onClick={() => setOpen(false)}>Cancel</Button>
                    <Button sx={{marginLeft: '4px'}} size={'small'} variant={'contained'} onClick={saveOrder}>Save</Button>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}