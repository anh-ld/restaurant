import {db} from 'Config/firebase'
import {getDMY} from "Util/date"
import {CustomerData} from "Type/store"

const checkoutTable = (total: number, dataHistory: Array<CustomerData>, uid: string) => async (dispatch: any) => {
    const {date, month, year} = getDMY()

    const todayData: CustomerData = dataHistory.find((item: CustomerData) => {
        return item.date === date && item.month === month && item.year === year
    })

    if (!total)
        return

    if (todayData === undefined) {
        const data = [...dataHistory, {date, month, year, money: total, customer: 1}]
        await db.collection('db').doc(uid).set({data})

        dispatch({
            type: "CHECK_OUT",
            data,
            amount: total
        })
    } else {
        const dataHistoryCopy: Array<CustomerData> = dataHistory.slice()
        const lastItem: CustomerData = dataHistoryCopy.pop()
        dataHistoryCopy.push({date, month, year, money: total + lastItem.money, customer: lastItem.customer + 1})

        await db.collection('db').doc(uid).set({
            data: dataHistoryCopy
        })

        dispatch({
            type: "CHECK_OUT",
            data: dataHistoryCopy,
            amount: total
        })
    }
}

export default checkoutTable