"use client"

import { Card, CardHeader, Modal } from "@mui/material";

export default function SearchOrderModal({open, setOpen}: {open: boolean, setOpen: (arg0: boolean) => void}) {
    
    return (
        <Modal open={open} onClose={() => setOpen(!open)}>
            <Card>
                <CardHeader>
                    Search Order Modal
                </CardHeader>
            </Card>
        </Modal>
    );
}