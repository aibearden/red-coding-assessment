"use client"

import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getOrders } from "../fetch/orders";
import { Edit } from "@mui/icons-material";
import { OrderInterface } from "../interfaces/orders";

interface ItemListInterface {
    orders: OrderInterface[],
    rowSelectionModel: GridRowId[],
    setRowSelectionModel: any
}

export default function ItemList({orders, rowSelectionModel, setRowSelectionModel}: ItemListInterface) {

    function handleEdit(evt: any, orderId: GridRowId) {
        evt.stopPropagation();
    }

    const columns: GridColDef[] = [
        {field: "orderId", headerName: "Order ID", width: 200},
        {field: "createdDate", headerName: "Creation Date", width: 200},
        {field: "createdByUserName", headerName: "Created By", width: 200},
        {field: "orderType", headerName: "Order Type", width: 200},
        {field: "customerName", headerName: "Customer", width: 200},
        {field: "actions", headerName: "", width: 100, renderCell: (params) => {
            return (
                <IconButton size="small" onClick={(evt: any) => handleEdit(evt, params.id)}><Edit fontSize="small"/></IconButton>
            );
         }}
    ];

    // could make this better with a custom hook with a custom made debounce in it


    return (
        <Box sx={{height: 400, width: '100%'}}>
            <DataGrid
                density="compact"
                rows={orders}
                columns={columns}
                getRowId={(row) => row.orderId}
                checkboxSelection
                hideFooter
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    setRowSelectionModel(newRowSelectionModel);
                }}
                rowSelectionModel={rowSelectionModel}
            />
        </Box>
    );
}