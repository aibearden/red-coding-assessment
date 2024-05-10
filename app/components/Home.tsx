"use client"

import { Stack } from "@mui/material";
import TopBar from "./TopBar";
import TableNavigation from "./TableNavigation";
import ItemList from "./ItemList";
import React, {useCallback, useEffect, useMemo, useState } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { OrderInterface } from "../interfaces/orders";
import { getOrders } from "../fetch/orders";

export default function Home() {

    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
    const [orders, setOrders] = useState<OrderInterface[]>([]);
    const [searchString, setSearchString] = useState('');

    const searchResults = () => {
        if(searchString.length > 0) {
            return orders.filter(order => order.orderId.toLowerCase().includes(searchString.trim().toLowerCase()));
        } else return orders;
    }

    useEffect(() => {
        getOrders().then((data) => {
            setOrders(data);
        })
    }, [])

    return (
        <Stack sx={{ width: '100vw', height: '100vh'}}>
            <TopBar />
            <TableNavigation searchOrders={setSearchString} rowSelectionModel={rowSelectionModel} setRowSelectionModel={setRowSelectionModel} />
            <ItemList orders={searchResults()} rowSelectionModel={rowSelectionModel} setRowSelectionModel={setRowSelectionModel} />
        </Stack>
    );
};