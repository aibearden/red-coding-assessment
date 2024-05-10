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