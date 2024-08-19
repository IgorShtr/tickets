import { TimeItem } from './TimeItem'
import { hourSlots } from '../variables'


export const TimeSlots = (props) => {
    return (
        <>
            <div>Chose time</div>
            <div >
                {hourSlots.map((hour, index) => {
                    return (<TimeItem  {...props} key={`${index}-${hour}`} hour={hour} />)
                })}
            </div>
        </>
    )
}