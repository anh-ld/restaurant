// two digit date, month - add 0 to date, month if it's less than 10
export const transform = (number: number): number => number < 10 ? Number('0' + number.toString()) : number

interface DMY {
	date: number
	month: number
	year: number
}

export const getDMY = (): DMY => {
	const year = new Date().getFullYear()
	const month = new Date().getMonth() + 1
	const date = new Date().getDate()
	return {date, month, year}
}