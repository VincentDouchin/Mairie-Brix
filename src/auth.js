import { app } from './firebase'

import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth"
import * as firebaseui from 'firebaseui'
const auth = getAuth(app)
window.auth = auth
const googleprovider = new GoogleAuthProvider()
const emailProvider = new EmailAuthProvider()

const uiConfig = {
    signInSuccessUrl: '/Mairie-Brix/',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        googleprovider.providerId,
        emailProvider.providerId

    ],
    signInFlow: 'popup',
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            debugger
            return true
        },
    },

    tosUrl: '/Mairie-Brix/',
    privacyPolicyUrl: function () {
        window.location.assign('<your-privacy-policy-url>');
    }

}
// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(auth)


// The start method will wait until the DOM is loaded.
const startUi = () => {

    ui.start('#firebaseui-auth-container', uiConfig)
}
const deleteUi = () => ui.reset()



export { startUi, auth, deleteUi }