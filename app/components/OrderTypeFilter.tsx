"use client"

import { Autocomplete, TextField } from "@mui/material";
import { orderTypes as listOfOrderTypes } from "../utils/orderinfo";

interface OrderTypeFilterInterface {
    orderTypes: string[],
    setOrderTypes: any
}

export default function OrderTypeFilter({ orderTypes, setOrderTypes }: OrderTypeFilterInterface) {

    return (
        <Autocomplete
            id="order-type-filter"
            multiple
            disablePortal
            value={orderTypes}
            options={listOfOrderTypes}
            onChange={(_, newValue: string[] | null) => {
                if(newValue) {
                    setOrderTypes(newValue);
                }
            }}
            size="small"
            sx={{ minWidth: "130px", width: "auto", marginLeft: "8px" }}
            filterSelectedOptions
            renderInput={(params) => <TextField {...params} label="Order Type" />}
        />
    );
}