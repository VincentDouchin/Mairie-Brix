// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAA_cfCm4BcjxWNv3TX64qIBkMwz8oxGWk",
    authDomain: "reservations-salles-brix.firebaseapp.com",
    projectId: "reservations-salles-brix",
    storageBucket: "reservations-salles-brix.appspot.com",
    messagingSenderId: "1075984616150",
    appId: "1:1075984616150:web:fc5ebe239a6ea6093ed777",
    measurementId: "G-DKH5JSHYSW"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyB98ISxB--C44x2PBxD7S2zObm452EBE5I",
//     authDomain: "reservations-salles.firebaseapp.com",
//     projectId: "reservations-salles",
//     storageBucket: "reservations-salles.appspot.com",
//     messagingSenderId: "575310683542",
//     appId: "1:575310683542:web:4984ab4587a9e9ecb211b7"
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
window.app = app
// const analytics = getAnalytics(app);
export { app }