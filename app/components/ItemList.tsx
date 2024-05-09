"use client"

import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getOrders } from "../fetch/orders";

interface OrderInterface {
    orderId: string,
    orderType: string, // could make this an enum
    customerName: string,
    createdDate: string,
    createdByUserName: string
}

export default function ItemList() {

    const [orders, setOrders] = useState<OrderInterface[]>([]);

    const columns: GridColDef[] = [
        {field: "orderId", headerName: "Order ID", width: 80},
        {field: "createdDate", headerName: "Creation Date", width: 100},
        {field: "createdByUserName", headerName: "Created By", width: 100},
        {field: "orderType", headerName: "Order Type", width: 100},
        {field: "customerName", headerName: "Customer", width: 100}
    ];

    useEffect(() => {
        getOrders().then((data) => {
            setOrders(data);
        })
    }, [])

    return (
        <Box sx={{height: 400, width: '100%'}}>
            <DataGrid
                density="compact"
                rows={orders}
                columns={columns}
                getRowId={(row) => row.orderId}
                checkboxSelection
                hideFooter
            />
        </Box>
    );
}