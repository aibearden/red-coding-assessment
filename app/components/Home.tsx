"use client"

import { Stack } from "@mui/material";
import TopBar from "./TopBar";
import TableNavigation from "./TableNavigation";
import ItemList from "./ItemList";
import React, { useEffect, useState } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";

export interface NewOrderInterface {
    orderType: string, // could make this an enum
    customerName: string,
    createdDate: string,
    createdByUserName: string
}

export interface OrderInterface {
    orderId: string,
    NewOrderInteface: NewOrderInterface
}

export default function Home() {

    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

    return (
        <Stack sx={{ width: '100vw', height: '100vh'}}>
            <TopBar />
            <TableNavigation rowSelectionModel={rowSelectionModel} setRowSelectionModel={setRowSelectionModel} />
            <ItemList rowSelectionModel={rowSelectionModel} setRowSelectionModel={setRowSelectionModel} />
        </Stack>
    );
};