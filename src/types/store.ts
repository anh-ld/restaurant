import {DefaultTheme} from "styled-components";

export interface TableDataType {
    name: string
    price: number
    quantity: number
}

export interface CustomerData {
    customer: number
    date: number
    money: number
    month: number
    year: number
}

export interface ThemeState {
    palette: DefaultTheme
    color: string
}

export interface State {
    selectedTable: number | null
    tableStatusData: Array<boolean>
    tableData: Array<Array<TableDataType>>
    totalCustomer: number
    moneyEarned: number
    user: any
    dataHistory: Array<CustomerData>
    theme: ThemeState
}