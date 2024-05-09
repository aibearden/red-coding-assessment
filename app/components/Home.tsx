"use client"

import { Stack } from "@mui/material";
import TopBar from "./TopBar";
import TableNavigation from "./TableNavigation";
import ItemList from "./ItemList";
import React, { useEffect, useState } from "react";

export default function Home() {

    return (
        <Stack sx={{ width: '100vw', height: '100vh'}}>
            <TopBar />
            <TableNavigation />
            <ItemList />
        </Stack>
    );
};