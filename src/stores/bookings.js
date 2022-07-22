import create from "zustand"
import { getBookings, addBooking } from "../firebase/firestore"

const getBookingsFromCalendar = async () => {
	const url = `https://www.googleapis.com/calendar/v3/calendars/${import.meta.env.VITE_GOOGLE_CALENDAR_ID}/events?key=${import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY}`
	const results = await (await fetch(url)).json()
	return results.items
}

const bookingsStore = create((set) => ({
	bookings: [],
	bookingsToValidate: [],
	init: async () => {
		set({
			bookings: await getBookingsFromCalendar(),
			bookingsToValidate: await getBookings()
		})
	},
	createBooking: (item) => {
		debugger
		addBooking(item)
		set(s => ({
			bookingsToValidate: [...s.bookingsToValidate, item]
		}))
	}

}))
export default bookingsStore