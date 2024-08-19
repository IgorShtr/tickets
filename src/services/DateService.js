import { DayService } from "./DayService"

export class DateService {

    constructor() {
        this.today = new Date()
    }

    getToday() {
        return new DayService(this.today)
    }

    getFutureDate(daysToAdd) {
        const nextDate = new Date(this.today)
        nextDate.setDate(this.today.getDate() + daysToAdd)
        return new DayService(nextDate)
    }
    getFutureDatesArray( numberOFNextDays) {
        return [...Array(numberOFNextDays)].map((date, index) => this.getFutureDate(index))
    }
}