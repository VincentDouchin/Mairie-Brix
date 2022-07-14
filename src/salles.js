import salle1 from '../public/saint-laurent1.jpg'
import salle2 from '../public/saint-patrice3.jpg'
import salle3 from '../public/salle_la_comete_ok.jpg'

const salles = [
    {
        id: 0, name: 'Gymnase', img: salle1, adress: '5 route du Parc', surface: '400m²', capacity: 20,
        bookings: [
            { date: { y: 2022, M: 6, d: 12 } },
        ],
    },
    {
        id: 1, name: 'Mairie', img: salle2, adress: '1 rue du Castel', surface: '200m²', capacity: 50,
        bookings: []
    },
    {
        id: 2, name: 'Eglise', img: salle3, adress: '15 rue du Castel', surface: '300m²', capacity: 30,
        bookings: []
    }
]
export default salles