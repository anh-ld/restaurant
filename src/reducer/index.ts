import {combineReducers} from 'redux'
import {getDMY} from "Util/date"
import palette from 'Util/theme'
import {TableDataType, CustomerData, ThemeState} from "Type/store"
import {Action} from 'Type/action'
import {DefaultTheme} from 'styled-components'

const {date, month, year} = getDMY()

// initialize data for table data
let initialTableData: Array<Array<TableDataType>> = new Array(16).fill([])

// initialize data for table status data
let initialTableStatusData: Array<boolean> = new Array(16).fill(false)

// table data reducer
const tableData = (state: Array<Array<TableDataType>> = initialTableData, action: Action) => {
    let stateCopy: Array<Array<TableDataType>> = []
    switch (action.type) {
        case "ADD_TABLE_ITEM":
            for (let i = 0; i < 16; i++) {
                stateCopy.push(state[i].slice())
            }
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
            for (let i = 0; i < 16; i++) {
                stateCopy.push(state[i].slice())
            }
            if (stateCopy[action.tableId][action.id].quantity === 1) {
                stateCopy[action.tableId].splice(action.id, 1)
            } else {
                stateCopy[action.tableId][action.id].quantity -= 1
            }
            return stateCopy

        case "TOGGLE_TABLE":
            for (let i = 0; i < 16; i++) {
                stateCopy.push(state[i].slice())
            }
            stateCopy[action.id] = []
            return stateCopy

        default:
            return state
    }
};

// table status data
const tableStatusData = (state: Array<boolean> = initialTableStatusData, action: Action) => {
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
const selectedTable = (state: number | null = null, action: Action) => {
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
const moneyEarned = (state: number = 0, action: Action) => {
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
const totalCustomer = (state: number = 0, action: Action) => {
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
const user = (state: any = null, action: Action) => {
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
const dataHistory = (state: Array<CustomerData> = [], action: Action) => {
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
const theme = (state: ThemeState = initThemeState, action: Action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            const newColorPalette: DefaultTheme = palette[action.color]
            return {
                palette: newColorPalette,
                color: action.color
            }

        default:
            return state
    }
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