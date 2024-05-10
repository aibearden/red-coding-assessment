"use client"

import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { Edit } from "@mui/icons-material";
import { OrderInterface } from "../interfaces/orders";

interface ItemListInterface {
    orders: OrderInterface[],
    rowSelectionModel: GridRowId[],
    setRowSelectionModel: any
}

export default function OrderList({orders, rowSelectionModel, setRowSelectionModel}: ItemListInterface) {

    function handleEdit(evt: any, orderId: GridRowId) {
        evt.stopPropagation();
    }

    const columns: GridColDef[] = [
        {field: "orderId", headerName: "Order ID", width: 300},
        {field: "createdDate", headerName: "Creation Date", width: 200},
        {field: "createdByUserName", headerName: "Created By", width: 200},
        {field: "orderType", headerName: "Order Type", width: 200},
        {field: "customerName", headerName: "Customer", width: 150},
        {field: "actions", headerName: "", width: 50, renderCell: (params) => {
            return (
                <IconButton size="small" onClick={(evt: any) => handleEdit(evt, params.id)}><Edit fontSize="small"/></IconButton>
            );
         }}
    ];

    return (
        <Box sx={{height: 400, width: '100%'}} id={"orders-list"}>
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