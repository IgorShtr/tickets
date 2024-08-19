import { useState } from 'react'
import { WeekColumns } from "../variables"
import { DateService } from "../services/DateService"
import { WeekDayColumn } from "./WeekDayColumn"

export const Calendar = () => {
    const [selectedTicket, setSelectedTicket] = useState({ date: null, time: null, seat: null })
    const dateService = new DateService();
    const nextDatesArray = dateService.getFutureDatesArray(10)

    return (
        <div>
            <h3>Tickets booking</h3>
            <div className="WeekColumns">

                {WeekColumns.map((weekColumnName, index) => {
                    const weekColumnDates = nextDatesArray?.filter(date => date.getWeekDay() === weekColumnName)
                    return (<WeekDayColumn key={`${index}-${weekColumnName}`} weekColumnName={weekColumnName} weekColumnDates={weekColumnDates} setSelectedTicket={setSelectedTicket} selectedTicket={selectedTicket} />)
                })}
            </div>
        </div>
    )
}