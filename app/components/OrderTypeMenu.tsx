"use client"

import { Autocomplete, TextField } from "@mui/material";
import { orderTypes } from "../utils/orderinfo";

interface OrderTypeMenuInterface {
    orderType: string,
    setOrderType: any
}

export default function OrderTypeMenu({ orderType, setOrderType }: OrderTypeMenuInterface) {

    return (
        <Autocomplete
            disablePortal
            value={orderType}
            id="order-type-menu"
            options={orderTypes}
            onChange={(event: any, newValue: string | null) => {
                setOrderType(newValue);
            }}
            size="small"
            sx={{marginTop: "6px"}}
            renderInput={(params) => <TextField {...params} label="Order Type" onClick={() => setOrderType()}/>}
        />
    );
}