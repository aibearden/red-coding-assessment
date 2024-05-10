"use client"

import { Stack } from "@mui/material";
import TopBar from "./TopBar";
import TableNavigation from "./TableNavigation";
import ItemList from "./ItemList";
import React, { useEffect, useState } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { OrderInterface } from "../interfaces/orders";
import { getOrderByTypes, getOrders } from "../fetch/orders";

export default function Home() {

    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
    const [orders, setOrders] = useState<OrderInterface[]>([]);
    const [searchString, setSearchString] = useState('');
    const [filteredOrderTypes, setFilteredOrderTypes] = useState<string[]>([]);

    const searchResults = () => {
        if (searchString.length > 0) {
            return orders.filter(order => order.orderId.toLowerCase().includes(searchString.trim().toLowerCase()));
        } else return orders;
    }

    useEffect(() => {
        if(filteredOrderTypes.length > 0) {
            getOrderByTypes(filteredOrderTypes).then((data) => {
                setOrders(data);
            })
        } else {
            getOrders().then((data) => {
                setOrders(data);
            })
        }
    }, [filteredOrderTypes])

    return (
        <Stack sx={{ width: '100vw', height: '100vh' }}>
            <TopBar />
            <TableNavigation 
                searchOrders={setSearchString} 
                rowSelectionModel={rowSelectionModel} 
                setRowSelectionModel={setRowSelectionModel} 
                filteredOrderTypes={filteredOrderTypes} 
                setFilteredOrderTypes={setFilteredOrderTypes} 
            />
            <ItemList 
                orders={searchResults()} 
                rowSelectionModel={rowSelectionModel} 
                setRowSelectionModel={setRowSelectionModel} 
            />
        </Stack>
    );
};