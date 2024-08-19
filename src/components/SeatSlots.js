import { seatSlots } from '../variables'
import { ActiveBooking } from '../services/ActiveBookingService'

export const SeatSlots = ({ setSelectedTicket, selectedTicket, selectedSeat, setSelectedSeat }) => {
    const setUpdates = (seat) => {
        setSelectedTicket({ ...selectedTicket, seat })
        setSelectedSeat(seat)
    }
    const bookingService = new ActiveBooking();
    const orderedSetsList = bookingService.getOrderedSeats(selectedTicket)
    return (
        <>
            <div >
                {seatSlots.map((seat, index) => {
                    const isOrdered = orderedSetsList.includes(seat);
                    return (
                        <div key={`${index}-${seat}`}
                            className={`seat-item  ${isOrdered && "disabled"} ${selectedSeat === seat && "selected"}`}
                            onClick={() => !isOrdered && setUpdates(seat)} >{seat}
                        </div>)
                })}
            </div>
        </>
    );
}
