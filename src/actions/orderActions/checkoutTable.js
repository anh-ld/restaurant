import {db} from '../../config/firebase';
import {getDMY} from "../../utils/date";

const checkoutTable = (total, dataHistory, uid) => dispatch => {
	const {date, month, year} = getDMY();

	let todayData = dataHistory.find(item => {
		return item.date === date && item.month === month && item.year === year;
	});

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
			});
	} else {
		let dataHistoryCopy = dataHistory.slice();
		let lastItem = dataHistoryCopy.pop();
		dataHistoryCopy.push({date, month, year, money: total + lastItem.money, customer: lastItem.customer + 1});
		db.collection('db').doc(uid).set({
			data: dataHistoryCopy
		})
			.then(() => {
				dispatch({
					type: "CHECK_OUT",
					data: dataHistoryCopy,
					amount: total
				})
			});
	}
};

export default checkoutTable;