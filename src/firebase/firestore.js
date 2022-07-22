import { getFirestore, collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { app } from "./firebase";
const getDocuments = async col => {
    const res = await getDocs(col)
    return res.docs.map(x => ({ id: x.id, ...x.data() }))
}
const db = getFirestore(app);

const bookingsCollection = collection(db, "bookings")
const addBooking = async (item) => await addDoc(bookingsCollection, item)
const getBookings = async () => await getDocuments(bookingsCollection)


const checkIfAdmin = async (userId) => {
    const user = doc(db, 'admins', userId)
    const res = await getDoc(user)
    return res.exists()
}

const sallesCollection = collection(db, 'salles')
const getSalles = async () => await getDocuments(sallesCollection)
export { addBooking, getBookings, checkIfAdmin, getSalles }