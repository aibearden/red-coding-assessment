import { NewOrderInterface } from "../interfaces/orders";

export const baseRedUrl = "https://red-candidate-web.azurewebsites.net/api";

export const sampleReturn = [
    {"createdByUserName": "Austin Bearden",
        "createdDate": "Wednesday, 08 May 2024",
        "customerName": "John Doe",
        "orderId": "cd9d9496-d37e-4d72-8597-25de05b5a91e",
        "orderType": "Standard"
    }
]

const getApiKey = () => {
    let data = sessionStorage.getItem("ApiKey");
    if(data && data.length > 0) {
        return data;
    } else {
        let apiKey = prompt("Enter api key");
        sessionStorage.setItem("ApiKey", apiKey || "");
        return apiKey || "";
    }
}

export const getOrders = async () => {
    try {
        const response = await fetch(`${baseRedUrl}/Orders`, {
            method: 'GET',
            headers: new Headers({
                "ApiKey": getApiKey(),
                "Accept": "*/*",
                "Connection": "keep-alive",
                "Content-Type": "application/json-patch+json"
            })
        });

        return response.json();
    } catch(e) {
        throw new Error(`Error getting orders + ${e}`)
    }
}

export const getOrderByTypes = async (orderType: string) => {
    try {
        const response = await fetch(`${baseRedUrl}/Orders/ByType?orderType=${orderType}`, {
            method: 'GET',
            headers: new Headers({
                "ApiKey": getApiKey(),
                "Accept": "*/*",
                "Connection": "keep-alive",
                "Content-Type": "application/json-patch+json"
            })
        });

        return response.json();
    } catch(e) {
        throw new Error(`Error getting order types + ${e}`)
    }
}

export const postOrder = async (newOrder: NewOrderInterface) => {
    try {
        const response = await fetch(`${baseRedUrl}/Orders`, {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: new Headers({
                "ApiKey": getApiKey(),
                "Accept": "*/*",
                "Connection": "keep-alive",
                "Content-Type": "application/json-patch+json"
            })
        });

        return response.json();
    } catch(e) {
        throw new Error(`Error getting orders + ${e}`)
    }
}

export const deleteOrders = async (orders: string[]) => {
    try {
        const response = await fetch(`${baseRedUrl}/Orders/Delete`, {
            method: 'POST',
            body: JSON.stringify(orders),
            headers: new Headers({
                "ApiKey": getApiKey(),
                "Accept": "*/*",
                "Connection": "keep-alive",
                "Content-Type": "application/json-patch+json"
            })
        });

        if(!response.ok) {
            throw new Error(`Error deleting orders`)
        }

        return response.status;
    } catch(e) {
        throw new Error(`Error deleting orders + ${e}`)
    }
}