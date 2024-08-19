import { useState } from 'react'
import { Popup } from '../UI/Popup'
import { SeatSlots } from './SeatSlots'
import { ActiveBooking } from '../services/ActiveBookingService'
import { seatSlots } from '../variables'

export const TimeItem = (props) => {
    const [openSeatsSet, setSeatsSet] = useState(false);
    const [selectedSeat, setSelectedSeat] = useState(null);
    const { hour, setSelectedTicket, selectedTicket, setOpenTimeSet } = props;
    const bookingService = new ActiveBooking();
    const setUpdates = () => {
        setSeatsSet(true);
        setSelectedTicket({ ...selectedTicket, time: hour })
    };
    const closeAllPopups = () => {
        setSeatsSet(false)
        setOpenTimeSet(false)
    }
    const addBooking = () => {
        bookingService.updateBooking(selectedTicket);
        closeAllPopups()
    }
    const orderedSetsList = bookingService.getOrderedSeats({ date: selectedTicket.date, time: hour });
    const isNoSeats = orderedSetsList.length === seatSlots.length

    return (
        <>
            <div className={`time-item ${isNoSeats && "disabled"}`} onClick={isNoSeats ? null : setUpdates}>
                <span>{hour}</span>:<span>00</span>
            </div>
            <Popup activeState={openSeatsSet} setStateAction={() => setSeatsSet(false)}>
                <div>Chose seat for <span>{hour}</span>:<span>00</span></div>
                <SeatSlots selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} {...props} />
                <div className='buttons-wrapper'>
                    <button onClick={() => setSeatsSet(false)}>Return to tine select</button>
                    <button disabled={!selectedSeat} onClick={addBooking}>Add</button>

                </div>

            </Popup>
        </>
    )
}