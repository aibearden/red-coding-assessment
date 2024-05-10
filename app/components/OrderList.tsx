"use client"

import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridRowId, selectedGridRowsCountSelector, selectedGridRowsSelector } from "@mui/x-data-grid";
import { Edit } from "@mui/icons-material";
import { OrderInterface } from "../interfaces/orders";

interface ItemListInterface {
    orders: OrderInterface[],
    rowSelectionModel: GridRowId[],
    setRowSelectionModel: any
}

export const OrderListTableColumns: GridColDef[] = [
    {field: "orderId", headerName: "Order ID", width: 300},
    {field: "createdDate", headerName: "Creation Date", width: 200},
    {field: "createdByUserName", headerName: "Created By", width: 200},
    {field: "orderType", headerName: "Order Type", width: 200},
    {field: "customerName", headerName: "Customer", width: 150},
    {field: "actions", headerName: "", width: 50, renderCell: () => {
        return (<IconButton size="small" onClick={() => {}}><Edit fontSize="small"/></IconButton>);
     }}
];

export default function OrderList({orders, rowSelectionModel, setRowSelectionModel}: ItemListInterface) {

    return (
        <Box sx={{height: 400, width: '100%'}} id={"orders-list"}>
            <DataGrid
                density="compact"
                rows={orders}
                columns={OrderListTableColumns}
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