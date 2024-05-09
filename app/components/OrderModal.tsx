"use client"

import { Dialog, FormControl, InputLabel, Input, Card, Stack, DialogTitle, DialogContent } from "@mui/material";

export default function OrderModal({open, setOpen}: {open: boolean, setOpen: (arg0: boolean) => void}) {
    
    return (
        <Dialog onClose={() => setOpen(false)} open={open}>
            <DialogTitle>Order</DialogTitle>
            <DialogContent sx={{ height: 400, width: 300 }}>
                    <Stack direction={'column'} justifyContent={'space-between'}>
                        <FormControl variant="standard" id={"order-id"}>
                            <InputLabel>Order Id</InputLabel>
                            <Input id="order-id" defaultValue="string" />
                        </FormControl>
                        <FormControl variant="standard" id={"order-type"}>
                            <InputLabel>Order Type</InputLabel>
                            <Input id="order-type" defaultValue="string" />
                        </FormControl>
                        <FormControl variant="standard" id={"customer-name"}>
                            <InputLabel>Customer Name</InputLabel>
                            <Input id="customer-name" defaultValue="string" />
                        </FormControl>
                    </Stack>
            </DialogContent>
        </Dialog>
    );
}