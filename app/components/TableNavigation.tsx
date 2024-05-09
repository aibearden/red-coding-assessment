"use client"

import { Button, InputAdornment, Stack, TextField, Menu, MenuItem } from "@mui/material";
import SearchOrderModal from "./SearchOrderModal";
import OrderModal from "./OrderModal";
import { useState } from "react";
import { Add, Delete, KeyboardArrowDownSharp, SearchOutlined } from "@mui/icons-material";

export default function TableNavigation() {

    const [openSearchModal, setOpenSearchModal] = useState(false);
    const [openOrderModal, setOpenOrderModal] = useState(false);
    const [openFilterModal, setOpenFilterModal] = useState(false);
    // TO-DO: search modal ref
    // TO-DO: order modal ref
    // TO-DO: filter modal ref

    const orderTypes: string[] = [
        'Standard', 
        'SaleOrder', 
        'PurchaseOrder', 
        'TransferOrder', 
        'ReturnOrder'
    ];

    return (
        <>
            <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} sx={{width: '100%', padding: '8px'}}>
                <TextField
                    size={"small"}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <SearchOutlined />
                        </InputAdornment>,
                    }}
                ></TextField>
                <Button
                    size={"small"}
                    variant={"contained"}
                    onClick={() => setOpenOrderModal(true)}
                    startIcon={<Add />}
                    sx={{marginLeft: '8px'}}
                >
                    Create Order
                </Button>
                <Button
                    size={"small"}
                    variant={"contained"}
                    onClick={() => setOpenOrderModal(true)}
                    startIcon={<Delete />}
                    sx={{marginLeft: '8px'}}
                >
                    Delete Selected
                </Button>
                <Button
                    variant="outlined"
                    size={"small"}
                    endIcon={<KeyboardArrowDownSharp />}
                    onClick={() => setOpenFilterModal(!openFilterModal)}
                    sx={{marginLeft: '8px'}}
                >
                    Order Type
                </Button>
                <Menu
                    open={openFilterModal}
                    sx={{marginLeft: '8px'}}
                >
                    {orderTypes.map((type, index) => {
                        return (
                            <MenuItem key={index} onClick={() => setOpenFilterModal(false)}>
                                {type}
                            </MenuItem>
                        );
                    })}
                </Menu>
            </Stack>
            <SearchOrderModal open={openSearchModal} setOpen={setOpenSearchModal} />
            <OrderModal open={openOrderModal} setOpen={setOpenOrderModal} />
        </>
    );
}