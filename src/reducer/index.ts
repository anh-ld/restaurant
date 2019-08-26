import {combineReducers} from 'redux'
import {getDMY} from '../utils/date'
import palette from '../utils/theme'
import {TableDataType, CustomerData, ThemeState} from "../types/store";

const {date, month, year} = getDMY()

// initialize data for table data
let initialTableData: Array<Array<TableDataType>> = new Array(16).fill([])

// initialize data for table status data
let initialTableStatusData: Array<boolean> = new Array(16).fill(false)

// table data reducer
const tableData = (state = initialTableData, action: any) => {
    switch (action.type) {
        case "ADD_TABLE_ITEM":
            let stateCopy: Array<Array<TableDataType>> = [];
            for (let i = 0; i < 16; i++) {
                stateCopy.push(state[i].slice())
            }
            // stateCopy[action.tableId].push(action.item);
            let checkItemExist: boolean = false
            for (let i = 0; i < stateCopy[action.tableId].length; i++) {
                if (action.item.name === stateCopy[action.tableId][i].name) {
                    stateCopy[action.tableId][i].quantity += 1
                    checkItemExist = true
                    break
                }
            }
            if (!checkItemExist) {
                action.item.quantity = 1
                stateCopy[action.tableId].push(action.item)
            }
            return stateCopy

        case "DELETE_TABLE_ITEM":
            let stateCopy1: Array<Array<TableDataType>> = []
            for (let i = 0; i < 16; i++) {
                stateCopy1.push(state[i].slice())
            }
            if (stateCopy1[action.tableId][action.id].quantity === 1) {
                stateCopy1[action.tableId].splice(action.id, 1)
            } else {
                stateCopy1[action.tableId][action.id].quantity -= 1
            }
            return stateCopy1

        case "TOGGLE_TABLE":
            let stateCopy2: Array<Array<TableDataType>> = []
            for (let i = 0; i < 16; i++) {
                stateCopy2.push(state[i].slice())
            }
            stateCopy2[action.id] = []
            return stateCopy2

        default:
            return state
    }
};

// table status data
const tableStatusData = (state = initialTableStatusData, action: any) => {
    switch (action.type) {
        case "TOGGLE_TABLE":
            let stateCopy: Array<boolean> = state.slice()
            stateCopy[action.id] = !stateCopy[action.id]
            return stateCopy

        default:
            return state
    }
};

// selected table
const selectedTable = (state: number | null = null, action: any) => {
    switch (action.type) {
        case "SELECT_TABLE":
            return action.id

        case "CLEAR_TABLE":
            return null

        default:
            return state
    }
};

// money
const moneyEarned = (state: number = 0, action: any) => {
    switch (action.type) {
        case "FETCH_DATA":
            const data: CustomerData = action.payload.find((item: any) => {
                return item.date === date && item.month === month && item.year === year
            })
            if (data) {
                return data.money
            }
            return state

        case "CHECK_OUT":
            return state + action.amount

        case "SIGN_OUT":
            return 0

        default:
            return state
    }
};

// customer number
const totalCustomer = (state: number = 0, action: any) => {
    switch (action.type) {
        case "FETCH_DATA":
            const data: CustomerData = action.payload.find((item: any) => {
                return item.date === date && item.month === month && item.year === year
            })
            if (data) {
                return data.customer
            }
            return state

        case "CHECK_OUT":
            return state + 1

        case "SIGN_OUT":
            return 0

        default:
            return state
    }
};

// user info
const user = (state: any = null, action: any) => {
    switch (action.type) {
        case "FETCH_USER":
            return action.payload

        case "SIGN_OUT":
            return "None"

        default:
            return state
    }
};

// data from the past reducer
const dataHistory = (state: Array<CustomerData> = [], action: any) => {
    switch (action.type) {
        case "FETCH_DATA":
            return action.payload

        case "CHECK_OUT":
            return action.data

        case "SIGN_OUT":
            return []

        default:
            return state
    }
}

const initThemeState: ThemeState = {
    palette: palette.blue,
    color: 'blue'
}

// theme
const theme = (state = initThemeState, action: any) => {
    switch (action.type) {
        case "CHANGE_THEME":
            const newColorPalette: any = palette[action.color]
            return {
                palette: newColorPalette,
                color: action.color
            }

        default:
            return state
    }
    return state
}

const reducer = combineReducers({
    selectedTable,
    tableStatusData,
    tableData,
    totalCustomer,
    moneyEarned,
    user,
    dataHistory,
    theme
})

export default reducer