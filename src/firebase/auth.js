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
        googleprovider.providerId,
        emailProvider.providerId

    ],
    signInFlow: 'popup',


    tosUrl: '/Mairie-Brix/',
    privacyPolicyUrl: function () {
        window.location.assign('<your-privacy-policy-url>');
    }

}
const ui = new firebaseui.auth.AuthUI(auth)

const startUi = () => ui.start('#firebaseui-auth-container', uiConfig)

const deleteUi = () => ui.reset()



export { auth, startUi, deleteUi }