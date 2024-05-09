const sampleReturn = [
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
        const response = await fetch("https://red-candidate-web.azurewebsites.net/api/Orders", {
            method: 'GET',
            headers: new Headers({
                "ApiKey": getApiKey(),
                "Accept": "*/*",
                "Connection": "keep-alive"
            })
        });

        return response.json();
    } catch(e) {
        throw new Error(`Error getting orders + ${e}`)
    }
}

export const getOrderByTypes = async (orderTypes: string[]) => {
    try {
        const response = await fetch(`https://red-candidate-web.azurewebsites.net/api/Order/ByType?orderType=${orderTypes}`, {
            method: 'GET',
            headers: new Headers({
                "ApiKey": "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4",
                "Accept": "*/*",
                "Connection": "keep-alive"
            })
        });

        return response.json();
    } catch(e) {
        throw new Error(`Error getting order types + ${e}`)
    }
}

export const postOrder = async () => {
    try {
        const response = await fetch("https://red-candidate-web.azurewebsites.net/api/Orders", {
            method: 'GET',
            headers: new Headers({
                "ApiKey": "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4",
                "Accept": "*/*",
                "Connection": "keep-alive"
            })
        });

        return response.json();
    } catch(e) {
        throw new Error(`Error getting orders + ${e}`)
    }
}