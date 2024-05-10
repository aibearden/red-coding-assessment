"use client"

import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import OrderModal from "./OrderModal";
import { useState } from "react";
import { Add, Delete, SearchOutlined } from "@mui/icons-material";
import { deleteOrders } from "../fetch/orders";
import { GridRowId } from "@mui/x-data-grid";
import OrderTypeFilter from "./OrderTypeFilter";

interface TableNavigationInterface {
    searchOrders: any,
    rowSelectionModel: GridRowId[],
    setRowSelectionModel: any,
    filteredOrderTypes: string[],
    setFilteredOrderTypes: any
}

export default function TableNavigation({searchOrders, rowSelectionModel, setRowSelectionModel, filteredOrderTypes, setFilteredOrderTypes}: TableNavigationInterface) {

    const [openOrderModal, setOpenOrderModal] = useState(false);

    function deleteSelectedOrder() {
        deleteOrders(rowSelectionModel.map(orderId => orderId.toString()));
        setRowSelectionModel([]);
    }

    return (
        <>
            <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} sx={{width: '100%', padding: '8px'}}>
                <TextField
                    size={"small"}
                    onChange={(evt) => searchOrders(evt.target.value)}
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
                    onClick={() => deleteSelectedOrder()}
                    startIcon={<Delete />}
                    sx={{marginLeft: '8px'}}
                >
                    Delete Selected
                </Button>
                <OrderTypeFilter orderTypes={filteredOrderTypes} setOrderTypes={setFilteredOrderTypes} />
            </Stack>
            <OrderModal open={openOrderModal} setOpen={setOpenOrderModal} />
        </>
    );
}