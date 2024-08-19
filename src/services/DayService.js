import { WeekColumns } from "../variables"
export class DayService {

    constructor(date) {
        this.date = date
    }

    getWeekDay() {
        return WeekColumns[this.date.getDay()]
    }

    getMonthDate() {
        return this.date.getDate()
    }
    getHours() {
        return this.date.getHours()
    }
}