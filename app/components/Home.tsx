"use client"

import { Stack } from "@mui/material";
import TopBar from "./TopBar";
import TableActionBar from "./TableActionBar";
import React, { useEffect, useState } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { getOrderByTypes, getOrders } from "../fetch/orders";
import OrderList from "./OrderList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateOrderList } from "../store/features/orderListSlice";
import { OrderInterface } from "../interfaces/orders";

export default function Home() {

    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
    const [searchString, setSearchString] = useState('');
    const [filteredOrderType, setFilteredOrderType] = useState<string>('');

    const dispatch = useDispatch();
    const orderList = useSelector((state: RootState) => state.orderList.orders);

    const searchResults = () => {
        if (searchString.length > 0) {
            return orderList.filter(order => order.orderId.toLowerCase().includes(searchString.trim().toLowerCase()));
        } else {
            return orderList;
        }
    }

    useEffect(() => {
        getOrders().then((data: OrderInterface[]) => {
            dispatch(updateOrderList({orders: data}));
        })
    }, [])

    const refreshOrderList = () => {
        if(filteredOrderType.length > 0) {
            getOrderByTypes(filteredOrderType).then((data: OrderInterface[]) => {
                dispatch(updateOrderList({orders: data}));
            })
        } else {
            getOrders().then((data: OrderInterface[]) => {
                dispatch(updateOrderList({orders: data}));
            })
        }
    }

    useEffect(() => {
        if(filteredOrderType.length > 0) {
            getOrderByTypes(filteredOrderType).then((data: OrderInterface[]) => {
                dispatch(updateOrderList({orders: data}));
            })
        } else {
            getOrders().then((data: OrderInterface[]) => {
                dispatch(updateOrderList({orders: data}));
            })
        }
    }, [filteredOrderType])

    return (
        <Stack sx={{ width: '100vw', height: '100vh' }} id="home">
            <TopBar />
            <TableActionBar 
                refreshOrderList={refreshOrderList}
                searchOrders={setSearchString} 
                rowSelectionModel={rowSelectionModel} 
                setRowSelectionModel={setRowSelectionModel} 
                filteredOrderType={filteredOrderType} 
                setFilteredOrderType={setFilteredOrderType} 
            />
            <OrderList 
                orders={searchResults()} 
                rowSelectionModel={rowSelectionModel} 
                setRowSelectionModel={setRowSelectionModel} 
            />
        </Stack>
    );
};