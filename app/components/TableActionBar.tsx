"use client"

import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import OrderModal from "./OrderModal";
import { useState } from "react";
import { Add, Delete, SearchOutlined } from "@mui/icons-material";
import { deleteOrders } from "../fetch/orders";
import { GridRowId } from "@mui/x-data-grid";
import OrderTypeFilter from "./OrderTypeFilter";

interface TableNavigationInterface {
    refreshOrderList: any,
    searchOrders: any,
    rowSelectionModel: GridRowId[],
    setRowSelectionModel: any,
    filteredOrderType: string,
    setFilteredOrderType: any
}

export default function TableActionBar({refreshOrderList, searchOrders, rowSelectionModel, setRowSelectionModel, filteredOrderType, setFilteredOrderType}: TableNavigationInterface) {

    const [openOrderModal, setOpenOrderModal] = useState(false);

    function deleteSelectedOrder() {
        deleteOrders(rowSelectionModel.map(orderId => orderId.toString())).then(_ => {
            refreshOrderList();
        });
        setRowSelectionModel([]);
    }

    return (
        <>
            <Stack id="table-action-bar" direction={'row'} justifyContent={'flex-start'} alignItems={'center'} sx={{width: '100%', padding: '8px'}}>
                <TextField
                    size={"small"}
                    onChange={(evt) => searchOrders(evt.target.value)}
                    label={'Customer Search'}
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
                <OrderTypeFilter orderType={filteredOrderType} setOrderType={setFilteredOrderType} />
            </Stack>
            
            <OrderModal refreshOrderList={refreshOrderList} open={openOrderModal} setOpen={setOpenOrderModal} />
        </>
    );
}