"use client"

import { Person, Settings } from "@mui/icons-material";
import { Stack, IconButton, Typography, Popover, Button } from "@mui/material";
import { useState } from "react";

export default function TopBar() {

    const [anchorPersonEl, setAnchorPersonEl] = useState<HTMLButtonElement | null>(null);

    const userOpen = Boolean(anchorPersonEl);
    const userId = userOpen ? 'user-popover' : undefined;

    const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorPersonEl(event.currentTarget);
    };

    function clearApiKey() {
        sessionStorage.setItem("ApiKey", "");
    }

    return (
        <Stack
            id="top-nav-bar"
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ paddingLeft: '4px', paddingRight: '4px', borderBottom: 'solid grey 1px' }}
        >
            <Stack direction={'row'} alignItems={'center'}>
                {/* <img height={50} src="https://media.licdn.com/dms/image/C560BAQF5MfYJyRSuqQ/company-logo_100_100/0/1630670414756?e=1723075200&v=beta&t=c3kRH_6GLHKyFFz77WznlmjoU-ybLNvQLBrCUuxF_m4"></img> */}
                <img src="../icon.png" height={20} alt="red logo" />
                <Typography sx={{ paddingLeft: "6px" }}>Red Orders</Typography>
            </Stack>
            <Stack
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
            >
                <IconButton><Settings /></IconButton>
                <IconButton onClick={handleUserClick}><Person /></IconButton>
                <Popover
                    id={userId}
                    open={userOpen}
                    anchorEl={anchorPersonEl}
                    onClose={() => setAnchorPersonEl(null)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Button onClick={clearApiKey}>Clear Api Key</Button>
                </Popover>
            </Stack>
        </Stack>
    );
}