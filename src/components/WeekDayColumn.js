import {Date} from "./Date"
export const WeekDayColumn = (props) => {
    const { weekColumnName, weekColumnDates } = props;
    return (<div >
        {weekColumnName}
        <div className="week-day-column">
            {weekColumnDates.map((date, index) => {
                return (<Date key={`${index}-${date}`} date={date} {...props}/>)
            })}
        </div>
    </div>)
}