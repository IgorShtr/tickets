export class ActiveBooking {
    getBooked() {
        const lastBookingString = sessionStorage.getItem("bookedSeats") || null
        return lastBookingString ? JSON.parse(lastBookingString) : [];
    }

    updateBooking(lastTicket) {
        const lastBooking = this.getBooked();
        const updatedDate = [...lastBooking, lastTicket];
        sessionStorage.setItem("bookedSeats", JSON.stringify(updatedDate))
    }

    getOrderedSeats ({date: selectedDate, time:selectedTime}){
        const allBooked  = this.getBooked();
        const filteredByDayAndTimeSeats = allBooked.filter(({date, time})=> date === selectedDate && time === selectedTime )
        return filteredByDayAndTimeSeats.map(({seat}) => seat)
    }
}