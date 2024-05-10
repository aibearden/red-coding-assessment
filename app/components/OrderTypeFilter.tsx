"use client"

import { Autocomplete, TextField } from "@mui/material";
import { orderTypes as listOfOrderTypes } from "../utils/orderinfo";

interface OrderTypeFilterInterface {
    orderType: string,
    setOrderType: any
}

export default function OrderTypeFilter({ orderType, setOrderType }: OrderTypeFilterInterface) {

    return (
        <Autocomplete
            id="order-type-filter"
            disablePortal
            value={orderType}
            options={listOfOrderTypes}
            onChange={(_, newValue: string | null) => {
                if(newValue) {
                    setOrderType(newValue);
                }
            }}
            size="small"
            sx={{ minWidth: "130px", width: "auto", marginLeft: "8px" }}
            filterSelectedOptions
            renderInput={(params) => <TextField {...params} label="Order Type" />}
        />
    );
}