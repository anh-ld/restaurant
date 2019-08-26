export interface Action {
    type: 'CHANGE_THEME' | 'SIGN_OUT'| 'SIGN_IN' | 'FETCH_DATA' | 'FETCH_USER' | 'TOGGLE_TABLE' | 'SELECT_TABLE' | 'DELETE_TABLE_ITEM' | 'CLEAR_TABLE' | 'CHECK_OUT' | 'ADD_TABLE_ITEM'
    payload?: any
    color?: string
    id?: string
    tableId?: string
    data?: any
    amount?: number
    item?: Item
}

export interface Item {
    price: number
    name: string
}