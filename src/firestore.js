import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);
const bookingsStore = collection(db, "bookings")
const addBooking = async () => await addDoc(bookingsStore, {
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
export { addBooking }