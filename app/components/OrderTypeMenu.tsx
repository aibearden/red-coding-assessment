"use client"

import { KeyboardArrowDownSharp } from "@mui/icons-material";
import { MenuItem, Button, Autocomplete, FormControl, TextField } from "@mui/material";
import { useState } from "react";

interface TableNavigation {
    orderType: string,
    setOrderType: any
}

export default function OrderTypeMenu({ orderType, setOrderType }: TableNavigation) {

    const orderTypes: string[] = [
        'Standard',
        'SaleOrder',
        'PurchaseOrder',
        'TransferOrder',
        'ReturnOrder'
    ];

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