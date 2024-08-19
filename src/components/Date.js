import { useState } from 'react'
import { Popup } from '../UI/Popup'
import { TimeSlots } from './TimeSlots'

export const Date = (props) => {
    const {date, setSelectedTicket, selectedTicket} = props;
    const [openTimeSet, setOpenTimeSet] = useState(false);
    const setUpdates =()=>{
        setOpenTimeSet(true);
        setSelectedTicket({...selectedTicket, date:date.getMonthDate()})
    }
    return (
        <>
            <div className="date" onClick={setUpdates}>
                {date.getMonthDate()}
            </div>
            <Popup activeState={openTimeSet} setStateAction={()=>setOpenTimeSet(false)}>
                <TimeSlots setOpenTimeSet ={setOpenTimeSet} {...props}/>
            </Popup>
        </>)
}