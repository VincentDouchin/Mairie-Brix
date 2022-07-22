import create from 'zustand'
import { getSalles } from '../firebase/firestore'

const sallesStore = create((set) => ({
    salles: [],
    init: async () => {
        set({ salles: await getSalles() })
    }

}))
export default sallesStore