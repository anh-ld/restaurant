import {TableDataType} from 'Type/store'

export interface Action {
    type: 'CHANGE_THEME' | 'SIGN_OUT'| 'SIGN_IN' | 'FETCH_DATA' | 'FETCH_USER' | 'TOGGLE_TABLE' | 'SELECT_TABLE' | 'DELETE_TABLE_ITEM' | 'CLEAR_TABLE' | 'CHECK_OUT' | 'ADD_TABLE_ITEM'
    payload?: any
    color?: string
    id?: number
    tableId?: number
    data?: any
    amount?: number
    item?: TableDataType
}

export interface Item {
    price: number
    name: string
}