import { useEffect } from 'react'
import sallesStore from '../stores/salles'
import bookingsStore from '../stores/bookings'
export default function StoreLoader({ setLoaded }) {
    const salles = sallesStore()
    const bookings = bookingsStore()
    useEffect(() => async () => {
        await Promise.all([salles.init(), bookings.init()])
        setLoaded(true)
    }, [])
    window.salles = salles
}
