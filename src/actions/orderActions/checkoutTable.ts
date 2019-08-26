import {db} from '../../config/firebase'
import {getDMY} from "../../utils/date"
import {CustomerData} from "../../types/store"

const checkoutTable = (total: number, dataHistory: Array<CustomerData>, uid: string) => (dispatch: any) => {
    const {date, month, year} = getDMY()

    let todayData: any = dataHistory.find((item: CustomerData) => {
        return item.date === date && item.month === month && item.year === year
    })

    if (todayData === undefined) {
        db.collection('db').doc(uid).set({
            data: [...dataHistory, {date, month, year, money: total, customer: 1}]
        })
            .then(() => {
                dispatch({
                    type: "CHECK_OUT",
                    data: [...dataHistory, {date, month, year, money: total, customer: 1}],
                    amount: total
                })
            })
    } else {
        let dataHistoryCopy: Array<CustomerData> = dataHistory.slice()
        let lastItem: CustomerData = dataHistoryCopy.pop()
        dataHistoryCopy.push({date, month, year, money: total + lastItem.money, customer: lastItem.customer + 1})
        db.collection('db').doc(uid).set({
            data: dataHistoryCopy
        })
            .then(() => {
                dispatch({
                    type: "CHECK_OUT",
                    data: dataHistoryCopy,
                    amount: total
                })
            })
    }
}

export default checkoutTable